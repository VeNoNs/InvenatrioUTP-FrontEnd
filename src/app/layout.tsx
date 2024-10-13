import '../styles/principals.css';

export const metadata = {
  title: 'Tu Aplicación',
  description: 'Descripción de tu aplicación',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es"> {/* Etiqueta <html> obligatoria */}
      <body> {/* Etiqueta <body> obligatoria */}
        {children} {/* Aquí se renderiza el contenido de cada página */}
      </body>
    </html>
  );
}
