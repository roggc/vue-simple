import Vue from 'vue'
import s from 'vue-styled-components'
import Appx from '../store/appx'
import InputCard from './inputCard'

export default Vue.extend({
    name:'myApp',
    data(){
        return{
            x:new Appx(),
            switch:true
        }
    },
    beforeMount(){
        this.x.commit({type:'init'})
    },
    watch:{
        switch:function(val){
            if(!val){
                this.x.commit({type:'setState',
            val:{happiness:'😟'}})
            }else{
                this.x.commit({type:'setState',
            val:{happiness:'😄'}})
            }
        }
    },
    render(){
        const Div=s.div`
        font-family:sans-serif;
        margin:10px;
        `
        const Title=s.div`
        font-size:1.2em;
        `
        const Content=s.div``
        const Line=s.div`
        display:inline-block;
        margin-right:10px;
        `
        const Separator=s.div`
        display:flex;
        .cards{
            flex-grow:1;
        }
        `
        const Col=s.div`
        display:flex;
        flex-direction:column;
        text-align:center;
        `
        return(
            <Div>        
                <Title><strong>How are you today???</strong></Title>
                <Content>
                    <Line>I am </Line>
                    <Line><MdSwitch vModel={this.switch} class='md-primary'/></Line>
                    <Line>{this.x.s.happiness}</Line>
                </Content>
                <Separator>
                <Col><InputCard x={this.x.s.inputCard1x} appx={this.x}/></Col>
                <div class='cards'>{this.x.s.cards}</div>
                </Separator>
            </Div>
        )
    }
})