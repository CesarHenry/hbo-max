import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { user, password } = credentials as {
          user: string;
          password: string;
        };
        if (user !== 'admin' || password !== 'admin') {
          throw new Error('Conta Inválida!');
        }

        return {
          id: '1',
          name: 'César Henrique de Oliveira',
          email: 'cesar_rasec89@hotmail.com',
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    signOut: '/auth/signout'
  }
};

export default NextAuth(authOptions);
