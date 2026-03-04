export function validateName(name) {
  if (!name || name.trim().length < 2) return "Name must be at least 2 characters.";
  return null;
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) return "Invalid email address.";
  return null;
}

export function validatePassword(password) {
  if (!password || password.length < 6) return "Password must be at least 6 characters.";
  return null;
}

export function validatePhone(phone) {
  if (!phone || !/^\+?\d{10,15}$/.test(phone)) return "Invalid phone number.";
  return null;
}

export function validateCollege(college) {
  if (!college || college.trim().length < 2) return "College name is required.";
  return null;
}

export function validateStudentId(id) {
  if (!id || id.trim().length < 3) return "Student ID is required.";
  return null;
}

export function getPasswordStrength(password) {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 4); // Max 4
}

export function validateOtp(otp) {
  if (!otp || !/^\d{6}$/.test(otp)) return "OTP must be 6 digits.";
  return null;
}