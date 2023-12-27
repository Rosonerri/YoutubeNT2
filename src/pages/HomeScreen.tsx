import styled from "styled-components";
// import img from "../assets/iphone6.jpg";
import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const HomeScreen= () => {
  // const data = Array.from({ length: 10})
  const [state, setState] = useState<any>({})
  useEffect(()=>{
    setState(JSON.parse(localStorage.getItem("tubeVideo")!))
  }, [])
  return (
   <Link style={{textDecoration: "none"}} to="/detailed-page">
    <Container>
      <br />

      <br />
      <Main> 
          
         {state?.items && state?.items.map((props: any)=>(
          <Card
          >
            <Top>
              <Image
              src={props.snippet.thumbnails.high.url}
              />
              <Video src={`https://youtube.com/embed/${props?.id.videoId}`}  />
              <Time>moment(new Date().getTime()).format("LT")</Time>
            </Top>
            <Bottom>
              <Avatar src={props.snippet.thumbnails.high.url}/>
              <Content>
                <ContentText>{props.snippet.channelTitle}</ContentText>
                <SmallText>
                  <Text>{props.snippet.description}</Text>
                  <Text>
                    3K Views &middot; {moment(new Date().getTime()).fromNow()}
                  </Text>
                </SmallText>
              </Content>
              <Dots />
            </Bottom>
          </Card>
         ))}
      </Main>
    </Container>
   </Link>
  );
};

export default HomeScreen;

const Dots = styled(BiDotsVerticalRounded)`
font-size: 20px;
color: black;
/* opacity: 0; */
position: relative;
`;

const Text = styled.div``;

const SmallText = styled.div`
  font-size: 14px;
  color: #888787;
`;

const ContentText = styled.div`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const Avatar = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid silver;
  margin-left: 5px;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  transition: all 350ms ease;
  &:hover{
    ${BiDotsVerticalRounded}{
      opacity: 1;
      position: absolute;
    }

    
  }
`;

const Time = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;

  padding: 2px 10px;
  font-size: 12px;

  right: 10px;
  bottom: 10px;
  transition: all 350ms;
`;

const Video = styled.iframe`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 350ms;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  width: 100%;
  height: 200px;
  background-color: aliceblue;
  position: relative;
  cursor: pointer;
  transition: all 350ms;

  &:hover {
    ${Video} {
      opacity: 1;
    }
    ${Time} {
      opacity: 0;
    }
  }
`;

const Card = styled.div`
  width: 400px;
  min-height: 200px;
  /* border: 1px solid silver; */
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin-top: 100px;
  @media screen and (max-width: 768px){
    width: 100%;
  }
  background-color: black;
`;
