import {myAxios} from "./myAxios";
import {getSchoolIp, getOpenid} from "../utils/storageGetter";

// 修改username
export const modifyUsername = (name) =>  {
  return myAxios("/myInfo/ChangName", {
    data: {
      openid: getOpenid(),
      name,
    }
  })
}

// 获取用户资料
export const getUserInfo = () => {
  return myAxios("/myInfo/GetInfo", {
    data: {
      openid: getOpenid,
    }
  })
}

// 获取用户书籍列表
export const getUserBooks = () => {
  return myAxios("/books/GetBooksByopenid", {
    data: {
      schoolIp: getSchoolIp(),
      openid: getOpenid, // 先写死!
    }
  })
}
