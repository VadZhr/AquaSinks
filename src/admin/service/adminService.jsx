import $api from "../api/axiosApi"

export default class AdminService{
    static fetchUsers(){
        return $api.get('/users') 
    }

    static sendAboutPhoto(payload){
        return $api.post('/aboutpage/uploadimage', payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        ).then(response => response)
    }
    static sendAboutData(payload){
        return $api.post('/aboutpage/addaboutdata', payload).then(response => response)
    }

    static getAboutPage(){
        return $api.get('/aboutpage/getimages')
    }

    static deleteAboutImage(payload){
        return $api.delete(`/aboutpage/delete/${payload}`)
    }

    static async sendAboutText(payload){
        return $api.put('/aboutpage/changetext', payload)
    }


    static getAllCategories(payload){
        return $api.get('/categories/getallcategories', payload).then(response => response)
    }
    static addCatrgory(payload){
        return $api.post('/categories/addcategory', payload).then(response => response)
    }
    static editCategory(payload){
        return $api.put(`/categories/editcategory`, payload).then(response => response)
    }
    static deleteCategory(payload){
        return $api.delete(`/categories/deletecategory/${payload}`).then(response => response)
    }


    static getAllProducts(){
        return $api.get('/products/getallproducts').then(response => response)
    }
    static addProducts(payload){
        return $api.post('/products/addproduct', payload).then(response => response)
    }
    static editProducts(payload){
        return $api.put(`/products/editproducts`, payload).then(response => response)
    }
    static deleteProduct(payload){
        return $api.delete(`/products/deleteproduct/${payload}`).then(response => response)
    }
    static updateProduct(payload){
        return $api.put(`/products/editproduct/${payload.id}`, payload.formData).then(response => response)
    }

    static editContacts(payload){
        return $api.put(`/contacts/editcontacts`, payload).then(response => response)
    }
    static getContacts(){
        return $api.get(`/contacts/getcontacts`).then(response => response)
    }

    static getHeaderFooterData(){
        return $api.get(`/headerfooter/getdata`).then(response => response)
    }
    static addHeaderFooterData(payload){
        return $api.put(`/headerfooter/adddata`, payload).then(response => response)
    }


}