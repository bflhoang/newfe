import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;

export const FooterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const SocialLinks = styled.ul`
  list-style-type: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
`;

export const SocialLinkItem = styled.li`
  margin: 0 10px;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #aaa;
  }
`;

export const StickyFooterWrapper = styled.div`
  flex-grow: 1;
`;
