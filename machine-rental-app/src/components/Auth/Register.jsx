import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice"; // لو مسار مختلف عدّله
import { FaUser, FaBuilding, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  // -----------------------------
  // Local input state
  // -----------------------------
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Validation errors
  const [validation, setValidation] = useState({});

  // -----------------------------
  // Handle Input Change
  // -----------------------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // -----------------------------
  // Validate Inputs
  // -----------------------------
  const validateForm = () => {
    let errors = {};

    if (!formData.full_name.trim()) errors.full_name = "Full name is required";

    if (!formData.company_name.trim())
      errors.company_name = "Company name is required";

    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";

    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.password_confirmation)
      errors.password_confirmation = "Passwords do not match";

    setValidation(errors);

    return Object.keys(errors).length === 0;
  };

  // -----------------------------
  // Submit Handler
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("➡️ Submitting form with data:", formData);

    // Validate Before Sending
    if (!validateForm()) {
      console.log("❌ Validation Failed:", validation);
      return;
    }

    console.log("✔ Validation Passed, dispatching register…");

    dispatch(registerUser(formData))
      .unwrap()
      .then((res) => {
        console.log("🎉 Register Success:", res);
      })
      .catch((err) => {
        console.log("❌ Register Failed:", err);
      });
  };

  return (
    <div className="flex items-center justify-center bg-[#F4F5F7] p-6 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 ">
        {/* Tabs (Login / Register) */}
        <div className="flex justify-center mb-8 space-x-6 text-gray-500">
          <button className="hover:text-blue-600">Login</button>
          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
            Register
          </button>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-gray-500 mt-1">
            Join the trusted marketplace for heavy machinery.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="full_name"
              type="text"
              placeholder="Enter your name"
              value={formData.full_name}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg ${
                validation.full_name ? "border-red-500" : ""
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {validation.full_name && (
              <p className="text-red-500 text-sm">{validation.full_name}</p>
            )}
          </div>

          {/* Company */}
          <div className="relative">
            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="company_name"
              type="text"
              placeholder="Enter your company"
              value={formData.company_name}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg ${
                validation.company_name ? "border-red-500" : ""
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {validation.company_name && (
              <p className="text-red-500 text-sm">{validation.company_name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg ${
                validation.email ? "border-red-500" : ""
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {validation.email && (
              <p className="text-red-500 text-sm">{validation.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg ${
                validation.password ? "border-red-500" : ""
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {validation.password && (
              <p className="text-red-500 text-sm">{validation.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="password_confirmation"
              type="password"
              placeholder="Re-enter your password"
              value={formData.password_confirmation}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg ${
                validation.password_confirmation ? "border-red-500" : ""
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {validation.password_confirmation && (
              <p className="text-red-500 text-sm">
                {validation.password_confirmation}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {loading ? "Registering…" : "Create Account"}
          </button>
        </form>

        {error && (
          <p className="text-center text-red-500 mt-4">
            {typeof error === "string" ? error : "Registration failed"}
          </p>
        )}

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default memo(Register);
