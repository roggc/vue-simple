import withStore from './withStore'
import InputCardx from './inputCardx'

export default withStore({
    init(data,this_){
        if(this_.s===null){
            this_.s={
                happiness:'😄',
                cards:[],
                inputCardx1:new InputCardx()
            }
            this_.s.inputCardx1.commit({type:'init'})
        }
    },
    setState(data,this_){
        this_.s={
            ...this_.s,
            ...data.val
        }
    }
})