import { GROUPID } from "../utilities/Settings/config";
import { baseService } from "./baseService";

export class UserManagermentService extends baseService {
  constructor() {
    super();
  }

  signIn = (thongTinDangNhap: any) => {
    //taiKhoan:'', matKhau:''
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  signUp = (thongTinDangKy: any) => {
    //taiKhoan:'', matKhau:''
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
  getUserList = (tuKhoa: string) => {
    if (tuKhoa.trim() !== "") {
      return this.get(
          `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
          );
        }
        return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  getDetailUser = (id: string) => {
    return this.get(`/api/QuanLyNguoiDung/ThongTinTaiKhoan/${id}`);
  };

  deleteUser = (taiKhoan: string)=>{
      return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)
  }

  addUser = (formData: any) =>{
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,formData);
  }

  updateUser = (formData: any) => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,formData);
}

}

export const userManagermentService = new UserManagermentService();