import styled from "styled-components";
import bg from '../../assets/imgs/homeImg/me.png'

export const Container = styled.div`
	overflow: hidden;
  .info{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
	header
{
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 0px 0px;
  z-index: 1000;
  transition: 0.6s;
}
header .logo
{
  position: relative;
  font-weight: 700;
  color: #40c3ff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.6s;
}
header #toggle
{
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
header #toggle:before
{
  content: '';
  position: absolute;
  top: 7px;
  width: 100%;
  height: 2px;
  background: #fff;
}
header #toggle:after
{
  content: '';
  position: absolute;
  bottom: 7px;
  width: 100%;
  height: 2px;
  background: #fff;
}
.banner.active #toggle:before
{
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(45deg);
}
.banner.active #toggle:after
{
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(-45deg);
}
.banner
{
  position: relative;
  max-width: 100vw;
  padding: 100px;
  padding-top:0px;
  max-height: 100vh ;
  background:  url(${bg});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  transition: 0.5s;
  z-index: 2;
}
.banner.active
{
  transform: translate(-300px);
}
.banner .content
{
  max-width: 600px;
}
.banner .content h3
{
  color: #fff;
  font-size: 2.5em;
}

.banner .content p
{
  font-size: 1.2em;
  color: #fff;
  font-weight: 300;
}
.banner .content a
{
  position: relative;
  display: inline-block;
  margin-top: 20px;
  background: #fff;
  color: #000;
  padding: 10px 30px;
  text-decoration:  none;
  font-size: 1.2em;
  font-weight: 500;
  transition: all ease .5s;
  border: 0;
}
.banner .content a:hover{
	background:#40c3ff;
	color: #fff;
	box-shadow: 0px 0px 20px #40c3ff;
}
.sci
{
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 8%;
  bottom: 8%;
  
}
.sci li
{
  list-style: none;
  background-color: rgba(0,0,0,.4);
}
.sci li a
{
  position: relative;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  border: 1px solid #fff;
  margin: 10px 0 0;
}
.sci li a:hover
{
  background: #fff;
}
.sci li a img
{
  filter: invert(1);
  max-width: 20px;
  mix-blend-mode: difference;
}
#navigation
{
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: #40c3ff;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  place-items: center;
  transition: 0.5s;
  
}

#navigation.active
{
  right: 0;
}
#navigation span{
	color: #000;
	font-size: 2em;
	font-weight: bold;
}
#navigation ul
{
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding-bottom: 200px;
}
#navigation ul li
{
  list-style: none;
}
#navigation ul li a
{
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 999;
  transition: all ease .3s;
}
#navigation ul li a:hover{
	color: #000;
}

// loader keyframes moving
.content .loader {
  text-align: center;
  color:#40c3ff;
  font-weight:bold;
  font-size:35px;
  overflow:hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
}

.loader div {
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

.loader div:first-of-type {   
  animation: showup 7s infinite;
}

.loader div:last-of-type {
  width:0px;
  animation: reveal 7s infinite;
}

.loader div:last-of-type span {
  margin-left:-355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:360px;}
    80% {opacity:1;}
    100% {opacity:0;width:360px;}
}


@media (max-width: 800px){
  
  header{
    padding: 0;
    width: 90%;
    margin: 0;
    .logo{
      font-size: 20px;
    }
    #toggle{
      width: 20px;
      height: 25px;
    }
  }
  .banner{
    padding: 20px 10px;
    font-size: 16px;
  }
  .banner .content{
    width: 90%;
  }
  .banner .content h3
  {
    font-size: 1.2em;
  }
  .banner .content a
  {
    font-size: 1em;
  }
  .banner.active
  {
    transform: translate(-250px);
  }

  #navigation
  {
    width: 200px;
    right: -280px;
  }
  #navigation span{
    font-size: 20px;
  }
  #navigation ul li a
  {
    font-size: 22px;
    margin: 5px 0;
  }
  .sci
  {
    position: absolute;
    right: initial;
    flex-direction: row;
    right: 3%;
    bottom: 3%;
  }
  .sci li a
  {
    margin: initial;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
  .sci li a img{
    width: 15px;
  }
.content .loader{
  font-size: 20px;
  height: auto;
  width: 100vw;
  text-align: left;
  span{
    padding-left: 10px;
  }
}
.loader div:last-of-type span {
  margin-left:-255px;
}
.content p{
  max-width: 500px;
}
.banner .content p{
  font-size: 14px;
  height: 100px;
  
}
.banner .content a{
  padding: 5px 10px;
  font-size: 14px;
}
.banner.active
{
  transform: translate(-170px);
}
}

@media (max-width:500px) {
  .content .loader{
    height: 70px;
  }
  .content .loader span{
    padding-left: 0px;
  }
}

`