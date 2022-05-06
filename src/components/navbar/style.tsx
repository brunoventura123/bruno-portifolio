import styled from "styled-components";

export const Container = styled.div`
    z-index: 999;
    position:absolute ;
    .navigation
{
	position: fixed;
	top:0 ;
    bottom:0 ;
    left: 0;
	width: 70px;
	box-sizing: initial;
	border-left: 10px solid #2b343b;
	box-shadow: 10px 0 0 #4187f6;
	background: #2b343b;
	transition: width 0.5s;
	overflow-x: hidden;
    
}
.logo{
    display: flex;
    justify-content:center ;
    padding-left:10px ;
    padding-top: 10px;
}

.navigation:hover
{
	width: 200px;
}
.navigation ul
{
	position: absolute;
	top: 0;
	left: 0;
    bottom:0;
	width: 100%;
	padding-left: 5px;
	padding-top: 40px;
    display: flex;
    flex-direction:column ;
    justify-content:center ;
}
.navigation ul li, .logo
{
	position: relative;
	list-style: none;
	width: 100%;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
}
.navigation ul li.active 
{
	background: #4187f6;
}
.navigation ul li a, .logo a
{
	position: relative;
	display: block;
	width: 100%;
	display: flex;
	text-decoration: none;
	color: #fff;
}
.navigation ul li.active a
{
	color: #fff;
}
.navigation ul li.active a::before
{
	content: '';
	position: absolute;
	top: -30px;
	right: 0;
	width: 30px;
	height: 30px;
	background: #2b343b;
	border-radius: 50%;
	box-shadow: 15px 15px 0 #4187f6;
}
.navigation ul li.active a::after
{
	content: '';
	position: absolute;
	bottom: -30px;
	right: 0;
	width: 30px;
	height: 30px;
	background: #2b343b;
	border-radius: 50%;
	box-shadow: 15px -15px 0 #4187f6;
}
.navigation ul li a .icons
{
	position: relative;
	display: block;
	min-width: 60px;
	height: 60px;
	line-height: 70px;
	text-align: center;
}
.navigation ul li a .icons i
{
	position: relative;
	font-size: 30px;
	z-index: 1;
}
.navigation ul li a .title
{
	position: relative;
	display: block;
	padding-left: 10px;
	height: 60px;
	line-height: 70px;
	white-space: nowrap;
}
.logo a .title{
    position: relative;
	display: block;
	padding-left: 25px;
	height: 60px;
	line-height: 40px;
	white-space: nowrap;
    color: #4187f6;
    font-weight:bold ;
    font-size: 22px;
}
`