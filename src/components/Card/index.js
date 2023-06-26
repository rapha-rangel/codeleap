import {Section, 
        Container, 
        Content, 
        Title,
        InputTitle,
        LabelTitle,
        TextareaContent,
        LabelContent,
        ButtonDiv,
        CancelButton,  
        ActionButton,
        ContentDiv} from "./styled";

const Card = ({title, 
              content, 
              titleName, 
              handleAction, 
              handleClose, 
              handleChangeTitle, 
              handleChangeContent, 
              actionName}) =>{
  
  
  return(
    <Section actionName={actionName}>
    <Container actionName={actionName}>
      <Content >
        <Title>{titleName}</Title>
        <ContentDiv actionName={actionName} >
          <InputTitle  type= "text" id="title" value={title}  onChange={handleChangeTitle}/>
          <LabelTitle  for="title">Title</LabelTitle>
          <TextareaContent type="text" id="content" rows="3" cols="33" value={content} onChange={handleChangeContent}></TextareaContent>
          <LabelContent  for="content">Content</LabelContent>
        </ContentDiv>
        <ButtonDiv>
          <ActionButton actionName={actionName} disabled={(!title || !content) && (actionName !== "Delete") } onClick={handleAction}>{actionName}</ActionButton>
          <CancelButton actionName={actionName} onClick={handleClose}>Cancel</CancelButton>
        </ButtonDiv>
      </Content>
    </Container>
    </Section>
  )
}

export default Card;