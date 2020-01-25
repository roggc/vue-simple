import Vue from 'vue'
import s from 'vue-styled-components'

export default Vue.extend({
    name:'myCard',
    props:{
        x:Object
    },
    render(){
        const Border=s.div`
        border-radius:3px;
        box-shadow:0 0 1px;
        float:left;
        padding:10px;
        margin:10px;
        `
        return (
            <Border>
                <div>{this.x.s.name}</div>
                <div>{this.x.s.job}</div>
            </Border>
        )
    }
})