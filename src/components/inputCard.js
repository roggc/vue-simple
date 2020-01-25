import Vue from 'vue'
import s from 'vue-styled-components'
import Card from './card'
import Cardx from '../store/cardx'

export default Vue.extend({
    name:'myInputCard',
    props:{
        x:Object,
        appx:Object
    },
    render(){
        const Border=s.div`
        border-radius:3px;
        box-shadow:0 0 1px;
        float:left;
        padding:10px;
        margin:10px;
        `
        const Input=s.input`
        border-radius:3px;
        `
        return (
            <Border>
                <div>
                    <MdField>
                        <label>Name</label>
                        <MdInput ref='name'/>
                    </MdField>
                    <MdField>
                        <label>Job</label>
                        <MdInput ref='job'/>
                    </MdField>
                </div>
            <MdButton vOn:click={()=>
                {
                    const cardId='card'+this.appx.s.cards.length+'x'
                    this.appx.commit({type:'setState',val:{
                        [cardId]:
                        new Cardx()
                    }})
                    this.appx.s[cardId].commit({type:'init'})
                    this.appx.s[cardId].commit({type:'setState',val:{
                        name:this.$refs.name.localValue,
                        job:this.$refs.job.localValue
                    }})
                    this.appx.s.cards.push(<Card x={this.appx.s[cardId]}/>)
                }} class='md-raised md-primary'>add card</MdButton>
            </Border>
        )
    }
})