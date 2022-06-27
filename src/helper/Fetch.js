import axios from 'axios'

export default async function Fetching(url, method, setData, data) {
    let res = await axios({ url: url, method: method })
    setData(res.data)
}