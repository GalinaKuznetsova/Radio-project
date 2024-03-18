import React from "react";
import { SectionTitle } from "../../../Components/SectionTitle";
import { StyledButton } from "../../../Components/Styledbutton";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import img1 from "../../../assets/images/marketing/1.webp";
import { Container } from "../../../Components/Contatiner";
import {S} from "./Marketing_Styles"
import { Icon } from "../../../Components/icon/icon";
type MarketingPropsType = {};
export const Marketing = (props: MarketingPropsType) => {
  return (
    <S.Marketing>
      <Container>
        <FlexWrapper justify="space-between" gap="30px">
          <div>
            <S.ImgContent>
            <S.Img src={img1} alt="" />
            </S.ImgContent>
          </div>
          <S.Text>
            <FlexWrapper direction="column" justify="space-between">
              <SectionTitle color="#F0D288">
                Будь с нами на одной волне!
              </SectionTitle>
              <Icon width="445px" height="10px" viewBo="0 0 445 10" iconId="wave"/>
              <S.Description>
                Друзья, рады представить вам продукт нашего производства! Да-да,
                несмотря на то, что мы только начали свой путь радиовещателей,
                нам хочется, чтобы вы могли как следует нас расслышать:)
              </S.Description>
              <S.Description>
                Итак, встречайте! Портативный радиоприёмник-колонка
                W-Wave 1.0 xm. Тщательный подбор всех делатей, ручная сборка,
                качественный звук. Пока доступно только 60 штук в 3 цветах,
                но мы активно трудимся над новыми партиями и дизайном. Спешите
                приобрести!
              </S.Description>
              <S.SmallText>2 800 ₽</S.SmallText>
              <StyledButton>
                Купить на Яндекс.Маркет
              </StyledButton>
            </FlexWrapper>
          </S.Text>
        </FlexWrapper>
      </Container>
    </S.Marketing>
  );
};


