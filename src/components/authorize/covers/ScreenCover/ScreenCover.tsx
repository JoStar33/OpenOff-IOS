import AuthorizeFlowButton from 'components/authorize/buttons/AuthorizeFlowButton/AuthorizeFlowButton';
import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import screenCoverStyles from './ScreenCover.style';

interface Props {
  children?: ReactNode;
  authorizeButton: {
    handlePress: () => void;
    label: string;
    isActive: boolean;
  };
}

const ScreenCover = ({ children, authorizeButton }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : -200}
      style={screenCoverStyles.scrollContainer}
    >
      <ScrollView>{children}</ScrollView>
      <AuthorizeFlowButton
        handlePress={authorizeButton.handlePress}
        label={authorizeButton.label}
        isActive={authorizeButton.isActive}
      />
    </KeyboardAvoidingView>
  );
};

export default ScreenCover;
