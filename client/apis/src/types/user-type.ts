// User 类
export interface UserType {
    id?: number
    username?: string
    email?: string
    password?: string
}

export interface UserLoginType {
    user: UserType
    code?: string //验证码
    uuid?: string //uuid
}


export interface UserInfoType {
    uid: number
    name: string
    avatar: string
    spacecover?: string
    email?: string
    gender?: number
    sign?: string
    birthday?: string
    created_at?: string
    role?: number
}

export interface ModifyUserInfoType {
    name: string,
    avatar: string,
    gender: number,
    sign: string,
    birthday: string
}

export interface ModifyPwdType {
    email: string
    password: string
    code: string //验证码
}

export interface AdminModifyUserInfoType {
    id: number,
    email: string,
    name: string,
    sign: string,
}

// 邮箱验证码发送实体
export interface EmailCodeType {
    email: string,
    code: string,
    uuid: string,
    username?: string,
    scene: Number // 1: 注册 2: 登录 3: 修改密码
}