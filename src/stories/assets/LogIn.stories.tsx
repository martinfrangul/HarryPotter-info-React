import { Meta, StoryFn } from '@storybook/react';
import LogIn from '../../components/LogIn'; // Ajusta la ruta según la ubicación de tu componente

export default {
  title: 'Components/LogIn',
  component: LogIn,
  parameters: {
    docs: {
      description: {
        component: 'Componente de inicio de sesión para autenticar usuarios.',
      },
    },
  },
  tags: ['autodocs']
} as Meta<typeof LogIn>;

const Template: StoryFn<typeof LogIn> = (args) => <LogIn {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSubmit: (email: string, password: string) => console.log(`Login submitted with email: ${email} and password: ${password}`),
};
