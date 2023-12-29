import fetcher from "./fetcher";

export const signupAPI = async (payload) => {
  try {
    // payload: { taiKhoan: "", matKhau:""...}
    const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
    return response.data.content;
  } catch (error) {
    if (error.response.status == 404) {
      alert("Đăng ký thất bại, vui lòng thử lại!");
      localStorage.clear(CURRENT_USER);
    }
  }
};

export const signinAPI = async (payload) => {
  try {
    // payload: { taiKhoan: "", matKhau:""}
    const response = await fetcher.post("/QuanLyNguoiDung/DangNhap", payload);
    return response.data.content;
  } catch (error) {
    if (error.response.status == 404) {
      alert("Đăng nhập thất bại, vui lòng thử lại!");
      localStorage.clear(CURRENT_USER);
    }
  }
};
