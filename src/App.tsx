
import { ThemeProvider } from './components/theme-context';
import { CVGeneratorContent } from './app/page';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">CV Builder</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <CVGeneratorContent
        />

        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
