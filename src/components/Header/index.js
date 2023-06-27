import { Container, Title, Status, User, Logo} from "./styled";
import { BiLogOutCircle} from "react-icons/bi";
import { connect, useDispatch } from "react-redux";
import {setLimitReset,
				setItemsToMapReset,
				erroList} from "../../redux/reducers/list";
import { isLogout } from "../../redux/reducers/login";
const Header = (props) => {

	const dispatch =useDispatch();

	const handleCloseMain = () => {
    dispatch(isLogout());
    dispatch(setLimitReset());
    dispatch(setItemsToMapReset())
    dispatch(erroList())
    props.setOpenMain(false);
    props.setAnimation(false);
  }

  return(
		<Container>
			<Title>CodeLeap Network</Title>
			<Status>
				<User>{props.user}</User>
				<Logo onClick={handleCloseMain}><BiLogOutCircle/></Logo>
			</Status>
			</Container>
	) 
}

const mapStateToProps =(state) =>({
  user: state.login.user,
})

export default connect(mapStateToProps)(Header);