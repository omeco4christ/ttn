import React from 'react'
import styled from '@emotion/native'
import {FONT_WEIGHT_BLACK} from '../../../constants/styles';
import {TextExLg} from '../../shared/text/Text';

const SignupHeader = () => {
    return (
        <Holder>
            <TextExLg weight={FONT_WEIGHT_BLACK} testID="welcome">
                Create an account
            </TextExLg>
        </Holder>
    )
}

export default SignupHeader

const Holder = styled.View`
  margin-bottom: 50px;
`