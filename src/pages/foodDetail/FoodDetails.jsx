import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FoodDetails = () => {
  const navigate = useNavigate();
  const { foodId } = useParams();
  const [selectedFood, setSelectedFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderCount, setOrderCount] = useState(1);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [isSaved, setIsSaved] = useState(false);

  // Mock food data - in real app this would come from API
  const foodData = {
    tiffin1: {
      emoji:'🍱', name:'Lentil Rice Combo', price:8, category:'Tiffin',
      veg:true, tags:['Popular'],
      by:'Priya N.', byInitial:'P', byColor:'#3DBDA8',
      hostel:'East Dorm', room:'Room 204',
      portions:2, ready:'10 min', rating:4.8, reviews:32,
      desc:'Home-cooked dal tadka with steamed rice, pickle, and papad. Made fresh every day with quality ingredients sourced from the campus co-op. No preservatives, no MSG.',
      includes:['Steamed basmati rice (1 cup)','Dal tadka with tempering','Mixed pickle','Papad (2 pieces)','Disposable container included'],
      allergens:'Contains gluten (papad). Dairy-free.',
      bg:'linear-gradient(135deg,#FFF3EC,#FFECD6)',
      reviewList:[
        {name:'Jake M.',rating:5,text:'Super fresh and tasty. Reminds me of home cooking!',time:'2 days ago'},
        {name:'Sara L.',rating:5,text:'Best lentil rice on campus. Will order again.',time:'4 days ago'},
        {name:'Raj P.',rating:4,text:'Good portions and fast pickup.',time:'1 week ago'},
      ]
    },
    snacks1: {
      emoji:'🍜', name:'Noodle Bowl', price:4, category:'Snacks',
      veg:true, tags:['New'],
      by:'Karan M.', byInitial:'K', byColor:'#8B5CF6',
      hostel:'South Hall', room:'Room 112',
      portions:5, ready:'5 min', rating:4.5, reviews:18,
      desc:'Classic two-minute noodles with sautéed veggies and house spiced. Customisable spice level — just mention in the order notes.',
      includes:['Noodles with spiced','Sautéed onions & capsicum','Optional: extra spice','Takeaway cup'],
      allergens:'Contains gluten, soy.',
      bg:'linear-gradient(135deg,#FFFBEC,#FFF3CC)',
      reviewList:[
        {name:'Amy C.',rating:5,text:'Quick and cheap. Perfect midnight snack.',time:'1 day ago'},
        {name:'Tom R.',rating:4,text:'Good but could use more veggies.',time:'3 days ago'},
      ]
    },
    group: {
      emoji:'🍕', name:'Campus Pizza Group Order', price:15, category:'Group Order',
      veg:false, tags:['Group'],
      by:'Sneha R.', byInitial:'S', byColor:'#EF4444',
      hostel:'West Dorm', room:'Common Room B',
      portions:2, ready:'45 min', rating:null, reviews:0,
      desc:'Split a large campus pizza order with dorm mates. Order gets placed once 6 people join. Each person picks their own toppings from the shared order form.',
      includes:['2 slices per person','Choice of toppings','Campus delivery to dorm','Order placed at 8 PM tonight'],
      allergens:'Contains gluten, dairy. Veg options available.',
      bg:'linear-gradient(135deg,#F3EFFE,#EDE0FF)',
      isGroup:true, joined:4, total:6,
      reviewList:[]
    },
    tiffin2: {
      emoji:'🍗', name:'Chicken Curry + Rice', price:12, category:'Tiffin',
      veg:false, tags:[],
      by:'Arjun T.', byInitial:'A', byColor:'#F59E0B',
      hostel:'North Hall', room:'Room 301',
      portions:3, ready:'15 min', rating:4.9, reviews:44,
      desc:'Spicy home-style chicken curry served with fragrant basmati rice and a side salad. Free-range chicken, slow-cooked with whole spices.',
      includes:['Chicken curry (bone-in, 2 pieces)','Basmati rice (1 cup)','Side salad','Disposable container'],
      allergens:'Contains chicken. Gluten-free.',
      bg:'linear-gradient(135deg,#FEF2F2,#FFE4E1)',
      reviewList:[
        {name:'Chris B.',rating:5,text:'Incredible flavour. The best non-veg on campus.',time:'1 day ago'},
        {name:'Maya S.',rating:5,text:'Generous portions and perfectly spiced.',time:'3 days ago'},
        {name:'Dev K.',rating:5,text:'Ordered 3 times already. Highly recommended.',time:'5 days ago'},
      ]
    },
    sweets1: {
      emoji:'🍮', name:'Homemade Honey Donuts', price:6, category:'Sweets',
      veg:true, tags:['Popular'],
      by:'Riya N.', byInitial:'R', byColor:'#EC4899',
      hostel:'East Dorm', room:'Room 407',
      portions:8, ready:'Now', rating:5.0, reviews:61,
      desc:'Soft and syrupy honey donutss made from scratch using khoya and rose water syrup. 4 pieces per portion, served at room temperature.',
      includes:['4 Honey Donuts pieces','Rose water syrup','Sealed container'],
      allergens:'Contains dairy, gluten.',
      bg:'linear-gradient(135deg,#FFF9EC,#FFEECC)',
      reviewList:[
        {name:'Lisa T.',rating:5,text:'Absolutely divine. Bought for the whole floor!',time:'2 days ago'},
        {name:'Sam W.',rating:5,text:'So good. Like grandma made them.',time:'3 days ago'},
        {name:'Pooja M.',rating:5,text:'Perfect sweetness. Best dessert on campus.',time:'1 week ago'},
      ]
    },
    drinks1: {
      emoji:'☕', name:'Spiced Chai', price:3, category:'Drinks',
      veg:true, tags:[],
      by:'Mihir P.', byInitial:'M', byColor:'#10B981',
      hostel:'South Hall', room:'Room 205',
      portions:10, ready:'3 min', rating:4.7, reviews:27,
      desc:'Strong spiced chai brewed with ginger, cardamom, cinnamon, and a hint of tulsi. Made with whole milk. Perfect for cold evenings.',
      includes:['12 oz cup of spiced chai','Whole milk (can substitute oat milk — mention in notes)','Lid included'],
      allergens:'Contains dairy. Vegan option available.',
      bg:'linear-gradient(135deg,#FFF3EC,#FFE8D6)',
      reviewList:[
        {name:'Ben H.',rating:5,text:'Best chai on campus. Tastes authentic.',time:'Yesterday'},
        {name:'Nadia R.',rating:4,text:'Good but a bit sweet for me.',time:'2 days ago'},
        {name:'Alex J.',rating:5,text:'Get the oat milk version — amazing.',time:'4 days ago'},
      ]
    },
    snacks2: {
      emoji:'🥪', name:'Egg Sandwich', price:7, category:'Snacks',
      veg:false, tags:[],
      by:'Rohan K.', byInitial:'R', byColor:'#3DBDA8',
      hostel:'Central Dorm', room:'Room 103',
      portions:4, ready:'8 min', rating:4.6, reviews:21,
      desc:'Double egg sandwich on toasted sourdough with cheddar cheese, crisp lettuce, and mayo. Add hot sauce on request.',
      includes:['2 fried eggs','Cheddar cheese slice','Lettuce & tomato','Toasted sourdough bread','Mayo & optional hot sauce'],
      allergens:'Contains eggs, gluten, dairy.',
      bg:'linear-gradient(135deg,#F0FDF4,#D1FAE5)',
      reviewList:[
        {name:'Claire P.',rating:5,text:'Filling and delicious. Great breakfast option.',time:'1 day ago'},
        {name:'Tim W.',rating:4,text:'Solid sandwich. Would love avocado option.',time:'3 days ago'},
      ]
    },
    tiffin3: {
      emoji:'🫓', name:'Cottage Cheese Sabji + Flatbread', price:9, category:'Tiffin',
      veg:true, tags:[],
      by:'Sneha R.', byInitial:'S', byColor:'#EF4444',
      hostel:'West Dorm', room:'Room 512',
      portions:2, ready:'20 min', rating:4.7, reviews:15,
      desc:'Cottage Cheese bhurji — scrambled cottage cheese with onions, tomatoes, and spices — served with 3 soft whole wheat rotis.',
      includes:['Cottage Cheese bhurji (150g)','3 whole wheat rotis','Green chutney','Disposable container'],
      allergens:'Contains dairy, gluten.',
      bg:'linear-gradient(135deg,#EFF6FF,#DBEAFE)',
      reviewList:[
        {name:'Kavya S.',rating:5,text:'Cottage Cheese was perfectly cooked. Flatbreads were soft.',time:'2 days ago'},
        {name:'James K.',rating:4,text:'Really good. Would love more cottage cheese.',time:'5 days ago'},
      ]
    },
  };

  useEffect(() => {
    // Find the food item by ID
    const food = foodData[foodId] || foodData['tiffin1'];
    if (food) {
      setSelectedFood(food);
    }
    setLoading(false);
  }, [foodId]);

  // Show toast notification
  const showToast = (message) => {
    setToast({ show: true, message, type: 'success' });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 2500);
  };

  // Add to order
  const addToOrder = (name, price) => {
    showToast(`${orderCount}x ${name} added · $${price * orderCount}`);
  };

  const handleAddToOrder = () => {
    addToOrder(selectedFood.name, selectedFood.price);
  };

  const handleBack = () => {
    navigate('/find-food');
  };

  const changeQty = (delta) => {
    setOrderCount(Math.max(1, Math.min(selectedFood.portions, orderCount + delta)));
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved' : 'Saved!');
  };

  const shareItem = () => {
    showToast('Link copied!');
  };

  const openMessage = () => {
    showToast('Opening chat with ' + selectedFood.by.split(' ')[0] + '…');
  };

  const renderStars = (rating) => {
    if (!rating) return '';
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#F07B3A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-[#111]/60">Loading food details...</p>
        </div>
      </div>
    );
  }

  if (!selectedFood) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] flex items-center justify-center">
        <div className="text-center">
          <span className="icon-o" style={{ fontSize: '48px', opacity: 0.3, display: 'block', marginBottom: '12px' }}>
            search_off
          </span>
          <p className="text-sm font-semibold text-[#111]/40 mb-2">Food item not found</p>
          <button 
            onClick={handleBack}
            className="text-sm text-[#F07B3A] font-semibold hover:underline"
          >
            Back to food list
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] relative">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/7 px-4 h-14 flex items-center gap-3">
        <button 
          onClick={handleBack}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors shrink-0"
        >
          <span className="icon-o" style={{ fontSize: '20px' }}>arrow_back</span>
        </button>
        <h1 className="text-base text-[#111] flex-1">{selectedFood.name}</h1>
        <button 
          onClick={shareItem}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors"
        >
          <span className="icon-o" style={{ fontSize: '20px' }}>share</span>
        </button>
        <button 
          onClick={toggleSave}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors"
        >
          <span 
            className={isSaved ? "icon" : "icon-o"} 
            style={{ fontSize: '20px', color: isSaved ? '#F07B3A' : '#111' }}
          >
            bookmark
          </span>
        </button>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 pt-20 pb-36">
        
        {/* Hero Image */}
        <div 
          className="rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden" 
          style={{ height: '260px', background: selectedFood.bg }}
        >
          <span 
            className="text-[120px] select-none" 
            style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,.1))' }}
          >
            {selectedFood.emoji}
          </span>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              selectedFood.veg ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FEF2F2] text-[#B91C1C]'
            }`}>
              {selectedFood.veg ? '● Veg' : '● Non-veg'}
            </span>
            {selectedFood.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#F3EFFE] text-[#7C3AED]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Rating */}
          {selectedFood.rating && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
              <span style={{ color: '#F5A54A', fontSize: '13px' }}>★</span>
              <span className="text-xs font-bold text-[#111]">{selectedFood.rating}</span>
              <span className="text-xs text-[#111]/40">({selectedFood.reviews})</span>
            </div>
          )}
          
          {/* Category pill */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
            {selectedFood.category}
          </div>
        </div>

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h1 className="text-2xl text-[#111] leading-tight flex-1">{selectedFood.name}</h1>
          <div className="text-right shrink-0">
            <p className="text-2xl text-[#F07B3A]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>
              ${selectedFood.price}
            </p>
            <p className="text-[10px] text-[#111]/35">per portion</p>
          </div>
        </div>

        {/* Meta Row */}
        <div className="flex items-center gap-3 flex-wrap mb-5">
          <span className="flex items-center gap-1.5 text-xs text-[#111]/50 bg-white border border-black/8 px-3 py-1.5 rounded-full font-medium">
            <span className="icon-o" style={{ fontSize: '13px' }}>schedule</span>
            Ready in {selectedFood.ready}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#111]/50 bg-white border border-black/8 px-3 py-1.5 rounded-full font-medium">
            <span className="icon-o" style={{ fontSize: '13px' }}>lunch_dining</span>
            {selectedFood.portions} portions left
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#111]/50 bg-white border border-black/8 px-3 py-1.5 rounded-full font-medium">
            <span className="icon-o" style={{ fontSize: '13px' }}>place</span>
            {selectedFood.hostel}
          </span>
        </div>

        {/* Group Progress */}
        {selectedFood.isGroup && (
          <div className="bg-white border border-black/7 rounded-2xl p-4 mb-4" style={{ background: '#EFF6FF', borderColor: 'rgba(59,130,246,.2)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="icon" style={{ fontSize: '20px', color: '#1D4ED8' }}>group</span>
                <p className="font-bold text-sm text-[#1D4ED8]">Group Order Progress</p>
              </div>
              <span className="text-sm font-bold text-[#1D4ED8]">{selectedFood.joined}/{selectedFood.total} joined</span>
            </div>
            <div className="h-3 bg-white/60 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full rounded-full transition-all" 
                style={{ width: `${(selectedFood.joined/selectedFood.total)*100}%`, background: '#3B82F6' }}
              />
            </div>
            <p className="text-xs text-[#1D4ED8]/70">
              {selectedFood.total - selectedFood.joined} more needed · Order placed at <strong>8:00 PM tonight</strong>
            </p>
          </div>
        )}

        {/* Description */}
        <div className="bg-white border border-black/7 rounded-2xl p-5 mb-4">
          <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">About this meal</p>
          <p className="text-sm text-[#111]/65 leading-relaxed mb-4">{selectedFood.desc}</p>
          
          {/* What's included */}
          <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-2">What's included</p>
          <div className="flex flex-col gap-1.5 mb-4">
            {selectedFood.includes.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="icon" style={{ fontSize: '14px', color: '#3DBDA8' }}>check_circle</span>
                <span className="text-sm text-[#111]/70">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Allergens */}
          <div className="bg-[#FEF9EC] rounded-xl p-3 flex items-start gap-2">
            <span className="icon" style={{ fontSize: '16px', color: '#F5B942', flexShrink: 0, marginTop: '1px' }}>warning</span>
            <p className="text-xs text-[#111]/55">
              <span className="font-semibold text-[#111]/70">Allergens:</span> {selectedFood.allergens}
            </p>
          </div>
        </div>

        {/* Posted by */}
        <div className="bg-white border border-black/7 rounded-2xl p-5 mb-4">
          <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">Posted by</p>
          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold shrink-0" 
              style={{ background: selectedFood.byColor }}
            >
              {selectedFood.byInitial}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-bold text-base text-[#111]">{selectedFood.by}</p>
                <span className="text-[10px] font-bold px-2 py-[2px] rounded-full flex items-center gap-1" style={{ background: '#EAF9F7', color: '#2A9E8C', border: '1px solid rgba(61,189,168,.2)' }}>
                  <span className="icon" style={{ fontSize: '11px', color: '#2A9E8C' }}>verified</span>
                  Verified
                </span>
              </div>
              <p className="text-xs text-[#111]/40">{selectedFood.hostel} · {selectedFood.room}</p>
              {selectedFood.rating && (
                <div className="flex items-center gap-1 mt-1">
                  <span style={{ color: '#F5A54A', fontSize: '12px' }}>★★★★★</span>
                  <span className="text-xs font-bold text-[#111]">{selectedFood.rating}</span>
                  <span className="text-xs text-[#111]/35">({selectedFood.reviews} reviews)</span>
                </div>
              )}
            </div>
            <button 
              onClick={openMessage}
              className="flex-shrink-0 h-9 px-3 rounded-xl bg-[#3DBDA8] text-white text-xs font-semibold flex items-center gap-1 hover:bg-[#2AA898] transition-colors"
            >
              <span className="icon" style={{ fontSize: '15px' }}>chat</span>
              Message
            </button>
          </div>
        </div>

        {/* Reviews */}
        {selectedFood.reviewList.length > 0 && (
          <div className="bg-white border border-black/7 rounded-2xl p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest">Reviews</p>
              <div className="flex items-center gap-1.5">
                <span style={{ color: '#F5A54A', fontSize: '14px' }}>★</span>
                <span className="text-sm font-bold text-[#111]">{selectedFood.rating}</span>
                <span className="text-xs text-[#111]/35">· {selectedFood.reviews} reviews</span>
              </div>
            </div>
            <div>
              {selectedFood.reviewList.map((review, index) => (
                <div key={index} className="pb-4 border-b border-black/5 last:border-b-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-full bg-[#F7F7F5] border border-black/8 flex items-center justify-center text-xs font-bold text-[#111]">
                      {review.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[#111]">{review.name}</p>
                    </div>
                    <span className="text-[#111]/25 text-[10px]">{review.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i} style={{ color: '#F5A54A', fontSize: '12px' }}>★</span>
                    ))}
                  </div>
                  <p className="text-xs text-[#111]/60 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safety Note */}
        <div className="flex items-start gap-3 bg-white border border-black/7 rounded-2xl p-4 mb-4">
          <span className="icon" style={{ fontSize: '20px', color: '#3DBDA8', flexShrink: 0 }}>verified_user</span>
          <div>
            <p className="text-xs font-semibold text-[#111] mb-0.5">Campus verified seller</p>
            <p className="text-[11px] text-[#111]/45 leading-relaxed">
              This seller's student ID has been verified by Sharezi. All transactions are processed in-app for your safety.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/97 backdrop-blur-md border-t border-black/8 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          {/* Qty stepper */}
          <div className="flex items-center gap-2 bg-[#F7F7F5] rounded-xl p-1">
            <button 
              onClick={() => changeQty(-1)}
              className="w-9 h-9 rounded-xl bg-white shadow-sm hover:bg-[#F7F7F5] flex items-center justify-center text-lg font-light"
            >
              −
            </button>
            <span className="w-8 text-center font-bold text-[#111]" style={{ fontFamily: 'Syne' }}>
              {orderCount}
            </span>
            <button 
              onClick={() => changeQty(1)}
              className="w-9 h-9 rounded-xl bg-white shadow-sm hover:bg-[#F7F7F5] flex items-center justify-center text-lg font-light"
            >
              +
            </button>
          </div>
          
          {/* Total */}
          <div className="flex-1">
            <p className="text-[10px] text-[#111]/35 font-semibold">Total</p>
            <p className="text-base text-[#111]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>
              ${selectedFood.price * orderCount}
            </p>
          </div>
          
          {/* CTA */}
          <button 
            onClick={handleAddToOrder}
            className="h-12 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#E8662A] transition-colors px-6"
            style={{ boxShadow: '0 4px 16px rgba(240,123,58,.28)' }}
          >
            <span className="icon" style={{ fontSize: '18px' }}>
              {selectedFood.isGroup ? 'group_add' : 'shopping_cart'}
            </span>
            {selectedFood.isGroup ? 'Join group order' : 'Add to order'}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#111] text-white px-4 py-2 rounded-full text-xs font-semibold z-40 flex items-center gap-2">
          <span className="icon" style={{ fontSize: '14px', color: '#3DBDA8' }}>check_circle</span>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
