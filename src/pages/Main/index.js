import {Section, MoreFeedButton} from "./styled";
import { useEffect, useState} from "react";
import { connect, useDispatch} from "react-redux";
import {fetchItems , 
        setLimitPlus, 
        fetchInicialItems,
        setItemsToMap} from "../../redux/reducers/list";
import DeleteDialog from "../DeleteDialog";
import EditScreen from "../EditScreen";
import Card from "../../components/Card";
import FeedCard from "../../components/FeedCard";
import Header from "../../components/Header";

const Main =(props)=>{
  const [animationContainer, setAnimationConatiner] = useState(false);
  const [animationButton, setAnimationButton] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [backMain, setBackMain] = useState(false);
  const dispatch = useDispatch();

  const handleMoreFeed =()=>{
    setAnimationButton(true)
    setTimeout(()=>{
      dispatch(setLimitPlus());
      props.fetchItems(props.limit)
      dispatch(setItemsToMap())
      setAnimationConatiner(true)
      setTimeout(()=>{
        setAnimationButton(false)
      }, 1000)
    },500)
  }

  useEffect(()=>{
    props.fetchInicialItems();
  },[props])

  return (
    <>
      {openEdit 
      ?
      <>
        <EditScreen setOpenEdit={setOpenEdit} setAnimation={setAnimationConatiner}/>
        <Header
          setAnimation={setAnimationConatiner}
          setOpenMain={props.setOpenMain}
          />
        <Section backMain={backMain}>
          <Card
            titleName={"What's on your mind?"}
            actionName={"Create"}
          />
            <FeedCard
            animation={false}
          />
        </Section>
      </>
      :
      <>
        {openDelete
          ?
            <>
            <DeleteDialog setOpenDelete={setOpenDelete} setAnimation={setAnimationConatiner}/>
            <Header
                setAnimation={setAnimationConatiner}
                setOpenMain={props.setOpenMain}
              />
            <Section backMain={backMain}>
              <Card
                titleName={"What's on your mind?"}
                actionName={"Create"}
              />
                <FeedCard
                animation={false}
              />
            </Section>
            </>
        :
          <>
            <Header
            setAnimation={setAnimationConatiner}
            setOpenMain={props.setOpenMain}
              />
            <Section id="header">
              <Card 
                titleName={"What's on your mind?"}
                actionName={"Create"}
              />
              <FeedCard
                setOpenDelete={setOpenDelete}
                setOpenEdit={setOpenEdit}
                animation={animationContainer}
                setBackMain={setBackMain}
              />
            <MoreFeedButton animation={animationButton}  onClick={handleMoreFeed}>More Feed</MoreFeedButton>
            </Section>
          </>
        }
      </>
  }
  
</>
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  title: state.list.title,
  content: state.list.content,
  limit: state.list.limit,
  itemsToMap: state.list.itemsToMap,
})

const mapDispatchToProps = {
  fetchItems,
  fetchInicialItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;