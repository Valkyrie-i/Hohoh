import {makeAutoObservable} from "mobx";

export default class TeachersStore{
    constructor() {
       this._lessons = [
           {id:1, name:'русский язык'},
           {id:2,name:'география'}
       ]
        this._teachers = [
            {id:1, name:'Алексей',surname:'Алексеев',phone:'3845679349', img:'https://sun9-39.userapi.com/impg/cFFqOEmYkWZHtf85yzPM_qwPyYbuYE0Xr3dVwg/i0_CxYPzaOQ.jpg?size=735x721&quality=95&sign=dd5e9da25fcddba4fc991022ca3c5f23&type=album/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:2, name:'Виктор',surname:'Викторов', img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'}
        ]
        makeAutoObservable(this)
    }
    setLessons(lessons){
        this._lessons = lessons
    }
    setTeachers(teachers){
        this._teachers = teachers
    }
    get lessons(){
        return this._lessons
    }
    get teachers(){
        return this._teachers
    }

}