import styled from "styled-components";

export const Container = styled.div`
    background-color: #16384c;
    margin: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .subtitle{
        padding: 0;
        margin:0 ;
        padding-bottom: 40px;
        font-size: 35px;
        text-align: center;
        color: #FFF;
    }
    .container{
        position: relative;
        display: flex;
        justify-content: center;
    }
.container .contactForm
{
  position: relative;
  width: 70%;
  height: 100%;
  background: transparent;
}
.container .contactForm h2
{
  color: #FFF;
  font-size: 24px;
  font-weight: 500;
}
.container .contactForm .formBox
{
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
}
.container .contactForm .formBox .inputBox
{
  position: relative;
  margin: 0 0 35px 0;
  
}
.container .contactForm .formBox .inputBox.w50
{
  width: 47%;
}
.container .contactForm .formBox .inputBox.w100
{
  width: 100%;
}
.container .contactForm .formBox .inputBox input,
.container .contactForm .formBox .inputBox textarea
{
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: #FFF;
  border: none;
  outline: none;
  border-bottom: 1px solid #777;
  background-color: transparent;
}
.container .contactForm .formBox .inputBox  span,
.container .contactForm .formBox .inputBox  span{
    color:#FFF !important;
}
.container .contactForm .formBox .inputBox textarea
{
  min-height: 120px;
}
.container .contactForm .formBox .inputBox span
{
  position: absolute;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
}
.container .contactForm .formBox .inputBox input:focus ~ span,
.container .contactForm .formBox .inputBox input:valid ~ span,
.container .contactForm .formBox .inputBox textarea:focus ~ span,
.container .contactForm .formBox .inputBox textarea:valid ~ span
{
  transform: translateY(-20px);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #FFF;
  font-weight: 500;
}
.container .contactForm .formBox .inputBox input[type="submit"]
{
  position: relative;
  cursor: pointer;
  background: #0d948b;
  color: #fff;
  border: none;
  max-width: 150px;
  padding: 12px;
}
.container .contactForm .formBox .inputBox input[type="submit"]:hover
{
  background: #0d948b;
}
.button
{
	display: flex;
	justify-content: center;
	align-items: center;
}
button
{
	position: relative;
	display: inline-block;
	padding: 15px 30px;
	color: #fff;
	background: transparent;
	border: 2px solid #0d948b;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
  cursor: pointer;
	text-decoration: none;
	transition: 0.5s;
	transition-delay: 0s;
	-webkit-box-reflect: below 0px linear-gradient(transparent,#0002);
}
button:hover
{
	transition-delay: 1.5s;
	color: #000;
	box-shadow: 0 0 10px #0d948b,
				0 0 20px #0d948b,
				0 0 40px #0d948b,
				0 0 80px #0d948b,
				0 0 160px #0d948b;
}
button:nth-child(2)
{
	filter: hue-rotate(80deg);
}
button span
{
	position: relative;
	z-index: 10;
}
button:before
{
	content: '';
	position: absolute;
	left: -20px;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 2px;
	background: #0d948b;
	transition: width 0.5s,left 0.5s, height 0.5s,box-shadow 0.5s;
	transition-delay: 1s,0.5s,0s,0s;
	box-shadow: 5px -8px 0 #0d948b,
				5px 8px 0 #0d948b;
}
button:hover:before
{
	width: 60%;
	height: 100%;
	left: -2px;
	transition-delay: 0s,0.5s,1s,1s;
	box-shadow: 0px 0 0 #0d948b,
				0px 0 0 #0d948b;
}
button:after
{
	content: '';
	position: absolute;
	right: -20px;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 2px;
	background: #0d948b;
	transition: width 0.5s,right 0.5s, height 0.5s,box-shadow 0.5s;
	transition-delay: 1s,0.5s,0s,0s;
	box-shadow: -5px -8px 0 #0d948b,
				-5px 8px 0 #0d948b;
}
button:hover:after
{
	width: 60%;
	height: 100%;
	right: -2px;
	transition-delay: 0s,0.5s,1s,1s;
	box-shadow: 0px 0 0 #0d948b,
				0px 0 0 #0d948b;
}

@media (max-width:770px) {
  .container .contactForm .formBox .inputBox.w50
{
  width: 100%;
}
.container .contactForm
{
  width: 95%;
}
.button{
  width: 100%;
}
button{
  padding: 10px 20px;
}
}
@media (max-width:650px) {
  max-width: 100vw;
  .subtitle{
      font-size: 23px;
      margin: 0;
    }
  .container{
    padding: 0 10px;

    .contactForm h2{
    font-size: 18px;

    
  }
  }
  .button{
    width: 100%;
    padding: 0;

  }
  button span{
    font-size: 10px;
    
  }
  .container .contactForm .formBox .inputBox span{
    font-size: 13px;
  }
}
`