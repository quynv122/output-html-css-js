<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const form = ref({
  name: "",
  email: "",
  note: "",
});
</script>

<template>
  <div class="page">
    <h1>Demo Teleport Form</h1>
    <button @click="isOpen = true">Mở form</button>

    <Teleport to="body">
      <div v-if="isOpen" class="modal-overlay">
        <div class="modal">
          <h2>Form đăng ký</h2>

          <form @submit.prevent="">
            <div class="form-group">
              <label>Họ tên</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Nhập họ tên..."
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Nhập email..."
              />
            </div>

            <div class="form-group">
              <label>Ghi chú</label>
              <textarea
                v-model="form.note"
                rows="3"
                placeholder="Ghi chú thêm..."
              ></textarea>
            </div>

            <div class="actions">
              <button type="button" @click="isOpen = false">Đóng</button>
              <button type="submit">Gửi</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 40px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: #fff;
  padding: 20px 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 14px;
  font-weight: 600;
}

input,
textarea {
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font: inherit;
}

.actions {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

button {
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

button[type="button"] {
  background: #e5e7eb;
}

button[type="submit"] {
  background: #2563eb;
  color: white;
}
</style>
