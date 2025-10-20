const tableHead = [
  "Họ tên",
  "Ngày sinh",
  "Địa chỉ",
  "Số điện thoại",
  "Email",
  "Hành động",
];

const accounts = [
  {
    id: "1241rghgqưeqweqwehgf3qw",
    name: "Nguyễn Văn Anh",
    birthday: "2002-02-01",
    address: "Phú Châu, Ba Vì - Hà Nội",
    phone: "0987654321",
    email: "nguyenvananh@gmail.com",
  },
  {
    id: "1241rqưeghgqưeqwehgf3qx",
    name: "Trần Đình Quý",
    birthday: "2002-05-15",
    address: "Phú Châu, Ba Vì - Hà Nội",
    phone: "0987654322",
    email: "trandinhquy@gmail.com",
  },
  {
    id: "1241rghgqưeqwehgf3qy",
    name: "Lê Văn Thành",
    birthday: "2001-12-10",
    address: "Phú Châu, Ba Vì - Hà Nội",
    phone: "0987654323",
    email: "levanthanh@gmail.com",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  renderTableHead(tableHead);
  renderTableBody(accounts);
});

function renderTableHead(tableHeads) {
  const thead = document.getElementById("table__head");
  const tr = document.createElement("tr");
  tableHeads.forEach((header) => {
    tr.innerHTML += `<th>${header}</th>`;
  });
  thead.appendChild(tr);
}

function renderTableBody(users) {
  const tbody = document.getElementById("table__body");
  tbody.innerHTML = "";

  if (users.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">
          <i class="fas fa-users"></i>
          <p>Không có dữ liệu người dùng</p>
        </td>
      </tr>
    `;
  } else {
    users.forEach((user, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${user.name}</strong></td>
        <td>${formatDate(user.birthday)}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td class="actions">
          <button class="action-btn edit-btn" onclick="openModalEditUser('${
            user.id
          }','${user.name}','${user.birthday}','${user.address}','${
        user.phone
      }','${user.email}')" title="Chỉnh sửa">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete-btn" onclick="handleDeleteUser('${
            user.id
          }')" title="Xóa">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}

function handleDeleteUser(id) {
  const popupComfirm = document.querySelector(".popup-comfirm");
  const messComfirm = popupComfirm.querySelector(".popup-comfirm__mess");
  const buttons = document.querySelectorAll(".popup-comfirm__actions button");
  const searchInput = document.getElementById("table-search-input").value;
  messComfirm.innerHTML = "Xác Nhận Xóa";

  popupComfirm.classList.add("active");

  buttons.forEach((btn) => {
    btn.addEventListener(
      "click",
      () => {
        if (btn.innerText.toLowerCase() === "xóa") {
          popupComfirm.classList.remove("active");
          deleteUser(id);
        } else {
          popupComfirm.classList.remove("active");
        }
      },
      { once: true }
    );
  });

  function deleteUser(id) {
    const indexUser = accounts.findIndex((user) => user.id === id);
    if (indexUser >= 0) {
      accounts.splice(indexUser, 1);
      notify("Đã xóa", "success");
      searchInput.trim().length > 0
        ? searchUser(accounts)
        : renderTableBody(accounts);
    } else {
      notify("Có lỗi xảy ra", "warning");
    }
  }
}

function openModalEditUser(id, name, birthday, address, phone, email) {
  const modalEditUser = document.getElementById("modal-edit-user");

  modalEditUser.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2><i class="fas fa-user-edit"></i> Chỉnh sửa thông tin</h2>
      </div>
      <form>
        <div class="form-group">
          <label for="edit-name"><i class="fas fa-user"></i> Họ tên</label>
          <input type="text" id="edit-name" name="name" value="${name}">
        </div>
        <div class="form-group">
          <label for="edit-birthday"><i class="fas fa-calendar"></i> Ngày sinh</label>
          <input type="date" id="edit-birthday" name="birthday" value="${birthday}">
        </div>
        <div class="form-group">
          <label for="edit-address"><i class="fas fa-map-marker-alt"></i> Địa chỉ</label>
          <input type="text" id="edit-address" name="address" value="${address}">
        </div>
        <div class="form-group">
          <label for="edit-phone"><i class="fas fa-phone"></i> Số điện thoại</label>
          <input type="text" id="edit-phone" name="phone" value="${phone}">
        </div>
        <div class="form-group">
          <label for="edit-email"><i class="fas fa-envelope"></i> Email</label>
          <input type="email" id="edit-email" name="email" value="${email}" disabled>
        </div>
        <div class="error-message" id="edit-errors"></div>
        <div class="modal-actions">
          <button type="button" class="btn btn-primary" onclick="updateUser('${id}')">
            <i class="fas fa-save"></i> Lưu thay đổi
          </button>
          <button type="button" class="btn btn-secondary" onclick="closeModalEditUser()">
            <i class="fas fa-times"></i> Hủy
          </button>
        </div>
      </form>
    </div>
  `;
  modalEditUser.classList.add("active");
}

function closeModalEditUser() {
  const modalEditUser = document.getElementById("modal-edit-user");
  modalEditUser.classList.remove("active");
}

function updateUser(id) {
  const nameRegex = /^[A-Za-zÀ-ỹ\s]{2,}$/;
  const phoneRegex = /^0\d{9}$/;

  const name = document.getElementById("edit-name").value;
  const birthday = document.getElementById("edit-birthday").value;
  const address = document.getElementById("edit-address").value;
  const phone = document.getElementById("edit-phone").value;

  if (!nameRegex.test(name.trim())) {
    let err = document.querySelector('.errName')
    err.innerHTML = 'Họ tên không hợp lệ'
    return;
  }
  if (invalidBirthday(birthday)) {
    errors.innerHTML =
      "Ngày sinh không hợp lệ (không được là ngày trong tương lai)";
    return;
  }
  if (address.trim() === "" || address.trim().length < 3) {
    errors.innerHTML = "Địa chỉ không hợp lệ (ít nhất 3 ký tự)";
    return;
  }
  if (!phoneRegex.test(phone)) {
    errors.innerHTML = "Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0)";
    return;
  }

  const userIndex = accounts.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    accounts[userIndex].name = name;
    accounts[userIndex].birthday = birthday;
    accounts[userIndex].address = address;
    accounts[userIndex].phone = phone;

    renderTableBody(accounts);
    closeModalEditUser();
    notify("Cật nhật thành công", "success");
  }
}

function openModalAddUser() {
  const modalAddUser = document.getElementById("modal-add-user");
  modalAddUser.classList.add("active");
}

function closeModalAddUser() {
  const modalAddUser = document.getElementById("modal-add-user");
  modalAddUser.classList.remove("active");
}

function searchUser(users) {
  const keyword = document.getElementById("table-search-input").value;
  if (keyword.trim().length > 0) {
    const searched = users.filter((user) =>
      user.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderTableBody(searched);
  } else {
    renderTableBody(accounts);
  }
}

function addUser() {
  const newUser = {};
  const nameRegex = /^[A-Za-zÀ-ỹ\s]{2,}$/;
  const phoneRegex = /^0\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const name = document.getElementById("name");
  const birthday = document.getElementById("birthday").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const id = crypto.randomUUID();
  const errors = document.querySelector(".modal-add-user__errors");

  function checkDuplicateEmail(email) {
    return accounts.some((user) => user.email === email);
  }

  if (!nameRegex.test(name.value.trim())) {
    let err = document.querySelector('.errName')
    err.style.color = 'red'
    err.style.fontSize = '13px'
    err.innerHTML = 'Họ tên không hợp lệ'
    name.style.border = "1px solid red";
    name.addEventListener('change', () => {
      name.style.border = "";
      err.innerHTML = ''
    })
    return;
  }
  if (invalidBirthday(birthday)) {
    errors.innerHTML =
      "Ngày sinh không hợp lệ (không được là ngày trong tương lai)";
    return;
  }
  if (address.trim() === "" || address.trim().length < 3) {
    errors.innerHTML = "Địa chỉ không hợp lệ (ít nhất 3 ký tự)";
    return;
  }
  if (!phoneRegex.test(phone)) {
    errors.innerHTML = "Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0)";
    return;
  }
  if (!emailRegex.test(email)) {
    errors.innerHTML = "Email không hợp lệ";
    return;
  }

  if (checkDuplicateEmail(email)) {
    errors.innerHTML = "Email này đã tồn tại trong hệ thống";
    return;
  }

  newUser.name = name;
  newUser.birthday = birthday;
  newUser.address = address;
  newUser.phone = phone;
  newUser.email = email;
  newUser.id = id;

  accounts.push(newUser);
  errors.innerHTML = "";
  notify("Thêm thành công", "success");
  renderTableBody(accounts);
  closeModalAddUser();
}

function notify(message, type) {
  const popupNotify = document.querySelector(".popup-notify");
  popupNotify.innerHTML = "";
  const mess = document.createElement("p");
  mess.classList.add(`popup-notify__mess--${type}`, "popup-notify__mess");
  mess.innerText = message;
  popupNotify.appendChild(mess);
  popupNotify.classList.add("active");

  setTimeout(() => {
    mess.remove();
  }, 2000);
}

function invalidBirthday(date) {
  if (date.trim() === "") {
    return true;
  } else {
    const birthday = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return birthday > today;
  }
}
