import { Text, View } from 'react-native';
import { Body, Title, IconBack, Container } from './styles';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { HeaderProfile } from '../HeaderProfile';
import { HeaderDate } from '../HeaderDate';
import { Notification } from '../Notification';

type HeaderProps = {
    title?: string;
}

export function Header({title}: HeaderProps) {
    return(
        <Body>
            {title ? (
                <View style={{flexDirection: 'row'}}>
                    <IconBack>
                    <Entypo style={{marginLeft:0}} name="chevron-left" size={32} color="black" />
                    </IconBack>
                    <Title>{title}</Title>
                </View>
            ) : (
                <Container>
                    <HeaderProfile name="Gabriel"/>
                    <HeaderDate/>
                    <Notification number={15}/>
                </Container>
            )}
        </Body>
    );

}