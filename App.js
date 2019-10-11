import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Input,
  Badge,Form, Item, Label , Textarea } from 'native-base';
import {  Accordion } from "native-base";



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      editallow:1,
     todolist:[
       { 
        title : "Thought Name",
        content: "About Thought Context"
       }
     ]
    }
  }

  render() {
    this.setState(state=>{
      const todolist = state.todolist.push({ title: "Second Element", content: "Lorem ipsum dolor sit amet" });
    });
    return (
      <Container>
        <Header>
         
          <Body style={{ alignSelf: "center" }} >
            <Title  style={{ alignSelf: "center" }}>Thought Keeper</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

<Accordion
        dataArray={this.state.todolist}
        icon="add"
        expandedIcon="remove"
        iconStyle={{ color: "green" }}
        expandedIconStyle={{ color: "red" }}
      />
      </Content>

  
      {this.state.editallow == 1 ? <Content padder position="bottom" style={{marginBottom:"1px" }}>
      <Form>
          <Input placeholder=" Title"  />
        <Textarea rowSpan={3}  placeholder="Context" />
        <Button block>
        <Text>Add Thought</Text>
      </Button>
      </Form>
    </Content> :  <Text> </Text> }
      <Footer>
      <FooterTab>
        <Button  vertical>
          <Icon  name="eye" />
          <Text>View Thoughts</Text>
        </Button>
        <Button vertical onPress={()=>window.location.reload()} >
          <Icon name="navigate" />
          <Text>Add Thought</Text>
        </Button>
      </FooterTab>
    </Footer>
      </Container>
    );
  }
}
