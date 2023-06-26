import { Section, Container,Content, Title, Label, Input,ButtonDiv, Button } from "./styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLogin} from "../../redux/reducers/login";
import { setListInicial } from "../../redux/reducers/list";
import Main from "../Main";

const Signup = () =>{

  const [textInput, setTextInput] = useState(false);
  const [openMain, setOpenMain] =useState(false);
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    dispatch(isLogin(e.target.value));
    e.target.value.length ? setTextInput(true): setTextInput(false);
  }

  const handleSubmit =() =>{
    !textInput ? setOpenMain(false) :  setOpenMain(true);
    setTextInput(false)
    dispatch(setListInicial())
  }

  return(
    <>
    {openMain
    ?
      <Main setOpenMain={setOpenMain}/>
    :
      <Section>
        <Container>
          <Content>
          <Title>Wellcome to the CodeLeap Network</Title>
          <Input type="text" id='user' onChange={handleChange}/>
          <Label for='user' textInput={textInput}> Please enter your Username</Label>
          <ButtonDiv>
          <Button onClick={handleSubmit} textInput={textInput}>Enter</Button>
          </ButtonDiv>
          </Content>
        </Container>
      </Section>
    }
  </>
  )
}


export default Signup;