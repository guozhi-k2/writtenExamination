import request from '@/utils/request'

// 登录方法
export function summarizer(data) {
    return request({
        url: '/api/summarizer/text',
        method: 'post',
        data
    })
}
