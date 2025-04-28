import PersonalInfoForm from '../components/PersonalInfoForm';
import EducationForm from '../components/EducationForm';
import ExperienceForm from '../components/ExperienceForm';
import SkillsForm from '../components/SkillsForm';
import SummaryForm from '../components/SummaryForm';
import ProjectForm from '../components/ProjectForm';
import CertificationForm from '../components/CertificationForm';
import LanguagesForm from '../components/LanguagesForm';
import HobbiesForm from '../components/HobbiesForm';
import CVPreview from '../components/CVPreview';

const CVBuilder = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      
      {/* Left side: Forms */}
      <div className="flex-1 space-y-6 overflow-y-auto h-screen pr-4">
        <h1 className="text-2xl font-bold mb-4">CV Builder</h1>
        
        <PersonalInfoForm />
        <EducationForm />
        <ExperienceForm />
        <SkillsForm />
        <SummaryForm />
        <ProjectForm />
        <CertificationForm />
        <LanguagesForm />
        <HobbiesForm />
      </div>

      {/* Right side: CV Preview */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-md shadow-md overflow-y-auto h-screen">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <CVPreview />
      </div>

    </div>
  );
};

export default CVBuilder;
