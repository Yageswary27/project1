import { PersonalInfoForm } from './components/personal-info-form';
import { EducationForm } from './components/education-form';
import { SummaryForm } from './components/summary-form';
import { ExperienceForm } from './components/experience-form';
import { LanguagesForm } from './components/languages-form';
import { ThemeProvider } from './components/theme-context';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">CV Builder</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <PersonalInfoForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <EducationForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          <ExperienceForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Languages</h2>
          <LanguagesForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <SummaryForm />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
