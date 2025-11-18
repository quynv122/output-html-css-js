<script setup lang="js">
import { ref } from 'vue'

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
  acceptTerms: false
})

const handleSubmit = () => {
  console.log(formData.value)
}
</script>

<template>
  <div class="container">
    <div class="form-wrapper">
      <h2 class="form-title">Create Account</h2>
      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="email" class="form-label">
            <span>Email Address</span>
          </label>
          <input id="email" type="email" v-model="formData.email" class="form-input" placeholder="your@email.com"
            required />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">
            <span>Password</span>
          </label>
          <input id="password" type="password" v-model="formData.password" class="form-input" placeholder="••••••••"
            required />
        </div>

        <div class="form-group">
          <label for="confirmPassword" class="form-label">
            <span>Confirm Password</span>
          </label>
          <input id="confirmPassword" type="password" v-model="formData.confirmPassword" class="form-input"
            placeholder="••••••••" required />
        </div>

        <div class="form-group">
          <label for="birthDate" class="form-label">
            <span>Birth Date</span>
          </label>
          <input id="birthDate" type="date" v-model="formData.birthDate" class="form-input" required />
        </div>

        <div class="checkbox-group">
          <input id="terms" type="checkbox" v-model="formData.acceptTerms" class="form-checkbox" required />
          <label for="terms" class="checkbox-label">
            I accept the <a href="" class="terms-link">Terms and Conditions</a>
          </label>
        </div>

        <button type="submit" class="submit-btn">Create Account</button>

        <p class="login-link">
          Already have an account? <a href="" class="link">Sign in</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #4264f8 0%, #6e0469 100%);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

.form-wrapper {
  background: rgb(197, 220, 236);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgb(0, 0, 0);
  width: 100%;
  max-width: 480px;
  border: 1px solid white;
}

.form-title {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
}

.form-input {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input::placeholder {
  color: #a0aec0;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.form-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #667eea;
}

.checkbox-label {
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  user-select: none;
}

.terms-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.terms-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.submit-btn {
  margin-top: 8px;
  padding: 14px;
  background-color: #4264f8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.submit-btn:active {
  transform: translateY(0);
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #718096;
  margin-top: 8px;
}

.link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.link:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>
