
import { get, post } from './http'
//标签
export const apiTag = p => post('/api/admin/tag', p);
