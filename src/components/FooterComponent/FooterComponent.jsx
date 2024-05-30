import React from 'react';
import { Footer, FooterContainer, FooterContent, FooterText, SocialLinks, SocialLinkItem, SocialLink, StickyFooterWrapper } from './style';

const FooterComponent = () => {
  return (
    <Footer>
      <StickyFooterWrapper>
        <FooterContainer>
          <FooterContent>
            <FooterText>&copy; 2024 SHOP Y2K.</FooterText>
            <SocialLinks>
              <SocialLinkItem>
                <SocialLink href="#">Facebook</SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink href="#">Twitter</SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink href="#">Instagram</SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink href="#">LinkedIn</SocialLink>
              </SocialLinkItem>
            </SocialLinks>
          </FooterContent>
        </FooterContainer>
      </StickyFooterWrapper>
    </Footer>
  );
};

export default FooterComponent;
