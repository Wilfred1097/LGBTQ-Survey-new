import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { renderToString } from 'react-dom/server';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    age: '',
    genderIdentity: '',
    sexualOrientation: '',
    discrimination: '',
    identified: '',
    familyComfort: '',
    friendsComfort: '',
    lgbtqSupport: '',
    abuseExperience: '',
    societalAcceptance: '',
    hidingGenderIdentity: '',
    legalProtections: '',
    lgbtqRepresentation: '',
    lgbtqAdvocacy: '',
    educationalCurriculaRepresentation: ''
  });

  const [showModal, setShowModal] = useState(true);

  // Convert JSX to string
  const htmlContent = renderToString(
    <div>
      By participating in this electronic survey conducted by the student of WMSU-ESU Pagadian, participants acknowledge and agree that their personal information will be kept confidential and will only be used for survey purposes. Participant responses will be anonymized for analysis, and no personally identified information will be disclosed publicly.
      <br /><br />
      Participation on the survey implies consent to these terms.
    </div>
  );

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  // Effect to show the modal when the component mounts
  useEffect(() => {
    // Show the modal using SweetAlert when the component mounts
    Swal.fire({
      title: 'Electronic Survey Agreement',
      width: '800px',
      html: `${htmlContent}<br><input type="checkbox" id="agree-checkbox" /> <label for="agree-checkbox">I agree with the terms and conditions</label>`,
      icon: 'info',
      confirmButtonText: 'Agree',
      preConfirm: () => {
        const agreeCheckbox = document.getElementById('agree-checkbox');
        if (!agreeCheckbox.checked) {
          Swal.showValidationMessage('You need to agree with the terms and conditions');
        }
        return agreeCheckbox.checked;
      },
      backdrop: `
      linear-gradient(120deg, #FFD700, #FF8C00, #FF1493, #4B0082, #0000FF, #228B22)
    `,
    }).then((result) => {
      if (result.isConfirmed) {
        setShowModal(false); // Close the modal
      }
    });
  }, []);

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleCourseChange = (e) => {
    setFormData({ ...formData, course: e.target.value });
  };

  const handleAgeChange = (e) => {
    setFormData({ ...formData, age: e.target.value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender_identity: e.target.value });
  };

  const handleSexualOrientationChange = (e) => {
    setFormData({ ...formData, sexual_orientation: e.target.value });
  };

  const handleChangeDiscrimination = (e) => {
    setFormData({ ...formData, discrimination: e.target.value });
  };

  const handleChangeIdentified = (e) => {
    setFormData({ ...formData, identified: e.target.value });
  };

  const handleChangeFamilyComfort = (e) => {
    setFormData({ ...formData, familyComfort: e.target.value });
  };

  const handleChangeFriendsComfort = (e) => {
    setFormData({ ...formData, friendsComfort: e.target.value });
  };

  const handleChangeLgbtqSupport = (e) => {
    setFormData({ ...formData, lgbtqSupport: e.target.value });
  };

  const handleChangeAbuseExperience = (e) => {
    setFormData({ ...formData, abuseExperience: e.target.value });
  };

  const handleChangeSocietalAcceptance = (e) => {
    setFormData({ ...formData, societalAcceptance: e.target.value });
  };

  const handleChangeHidingGenderIdentity = (e) => {
    setFormData({ ...formData, hidingGenderIdentity: e.target.value });
  };

  const handleChangeLegalProtections = (e) => {
    setFormData({ ...formData, legalProtections: e.target.value });
  };

  const handleChangeCultureRepresentation = (e) => {
    setFormData({ ...formData, cultureRepresentation: e.target.value });
  };

  const handleChangeLgbtqAdvocacy = (e) => {
    setFormData({ ...formData, lgbtqAdvocacy: e.target.value });
  };

  const handleChangeEducationalRepresentation = (e) => {
    setFormData({ ...formData, educationalRepresentation: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
    <Container className="mt-3">
      <Card>
        <Card.Header className="bg-light">
          <Card.Title className="mb-0" style={animatedTitleStyle}><strong>LGBTQ Survey</strong></Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Please enter your email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
                value={formData.email}
                name='email'
                onChange={handleChangeEmail}
                required
              />
            </Form.Group>
            {/* Number 1 */}
            <Form.Group className="mb-3">
            <Form.Label>1. What department where you came from?</Form.Label>
            <div>
            <Form.Check
                block
                type="radio"
                label="Bachelor of Elementary Education"
                id="campus_main"
                value="Bachelor of Elementary Education"
                name="course"
                checked={formData.course === "Bachelor of Elementary Education"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Science in Criminology"
                id="campus_alicia"
                value="Bachelor of Science in Criminology"
                name="course"
                checked={formData.course === "Bachelor of Science in Criminology"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Arts in Political Science"
                id="campus_aurora"
                value="Bachelor of Arts in Political Science"
                name="course"
                checked={formData.course === "Bachelor of Arts in Political Science"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Science in Social Work"
                id="campus_imelda"
                value="Bachelor of Science in Social Work"
                name="course"
                checked={formData.course === "Bachelor of Science in Social Work"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Science in Computer Science"
                id="campus_diplahan"
                value="Bachelor of Science in Computer Science"
                name="course"
                checked={formData.course === "Bachelor of Science in Computer Science"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Secondary Education major in Science"
                id="campus_ipil"
                value="Bachelor of Secondary Education major in Science"
                name="course"
                checked={formData.course === "Bachelor of Secondary Education major in Science"}
                onChange={handleCourseChange}
                required
              />
              <Form.Check
                block
                type="radio"
                label="Bachelor of Secondary Education major in English"
                id="campus_mabuhay"
                value="Bachelor of Secondary Education major in English"
                name="course"
                checked={formData.course === "Bachelor of Secondary Education major in English"}
                onChange={handleCourseChange}
                required
              />
            </div>
          </Form.Group>
          {/* Number 3 */}
            <Form.Group className="mb-3">
              <Form.Label>3. What is your age?</Form.Label>
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Under 18"
                  id="age_under18"
                  value="Under 18"
                  name="age"
                  checked={formData.age === "Under 18"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="18-24"
                  id="age_1824"
                  value="18-24"
                  name="age"
                  checked={formData.age === "18-24"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="25-34"
                  id="age_2534"
                  value="25-34"
                  name="age"
                  checked={formData.age === "25-34"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="35-44"
                  id="age_3544"
                  value="35-44"
                  name="age"
                  checked={formData.age === "35-44"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="45-54"
                  id="age_4544"
                  value="45-54"
                  name="age"
                  checked={formData.age === "45-54"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="55-64"
                  id="age_5564"
                  value="55-64"
                  name="age"
                  checked={formData.age === "55-64"}
                  onChange={handleAgeChange}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="65 or older"
                  id="age_65_older"
                  value="65-or-older"
                  name="age"
                  checked={formData.age === "65-or-older"}
                  onChange={handleAgeChange}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 4 */}
            <Form.Group className="mb-3">
              <Form.Label>4. What is your sexual orientation?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Male"
                  id="gender_male"
                  value="Male"
                  name="sexual_orientation"
                  onChange={handleSexualOrientationChange}
                  checked={formData.sexual_orientation === "Male"}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Female"
                  id="gender_female"
                  value="Female"
                  name="sexual_orientation"
                  onChange={handleSexualOrientationChange}
                  checked={formData.sexual_orientation === "Female"}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 5 */}
            <Form.Group className="mb-3">
              <Form.Label>5. What is your gender identity?</Form.Label><br />
              <div>
              <Form.Check
                  block
                  type="radio"
                  label="Girl"
                  id="sexual_girl"
                  value="Girl"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Girl'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Boy"
                  id="sexual_boy"
                  value="Boy"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Boy'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Lesbian"
                  id="sexual_lesbian"
                  value="Lesbian"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Lesbian'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Gay"
                  id="sexual_gay"
                  value="Gay"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Gay'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Bisexual"
                  id="sexual_bisexual"
                  value="Bisexual"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Bisexual'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Pansexual"
                  id="sexual_pansexual"
                  value="Pansexual"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Pansexual'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Asexual"
                  id="sexual_asexual"
                  value="Asexual"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Asexual'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Queer"
                  id="sexual_queer"
                  value="Queer"
                  name="gender_identity"
                  onChange={handleGenderChange}
                  checked={formData['gender_identity'] === 'Queer'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 6 */}
            <Form.Group className='mb-3'>
              <Form.Label>6. Have you ever experienced discrimination or harassment based on your sexual orientation or gender identity in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="discrimination_yes"
                  value="Yes"
                  name="discrimination"
                  onChange={handleChangeDiscrimination}
                  checked={formData['discrimination'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="discrimination_no"
                  value="No"
                  name="discrimination"
                  onChange={handleChangeDiscrimination}
                  checked={formData['discrimination'] === 'No'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 7 */}
            <Form.Group className='mb-3'>
              <Form.Label>7. Have you ever openly identified as LGBTQ (lesbian, gay, bisexual, transgender, queer) in any context?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="identified_yes"
                  value="Yes"
                  name="identified"
                  onChange={handleChangeIdentified}
                  checked={formData['identified'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="identified_no"
                  value="No"
                  name="identified"
                  onChange={handleChangeIdentified}
                  checked={formData['identified'] === 'No'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Unsure"
                  id="identified_not_to_say"
                  value="not_to_say"
                  name="identified"
                  onChange={handleChangeIdentified}
                  checked={formData['identified'] === 'not_to_say'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 8 */}
            <Form.Group className='mb-3'>
              <Form.Label>8. How comfortable do you feel discussing LGBTQ topics with your family?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very comfortable"
                  id="family_very_comfortable"
                  value="Very comfortable"
                  name="familyComfort"
                  onChange={handleChangeFamilyComfort}
                  checked={formData['familyComfort'] === 'Very comfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat comfortable"
                  id="family_somewhat_comfortable"
                  value="Somewhat comfortable"
                  name="familyComfort"
                  onChange={handleChangeFamilyComfort}
                  checked={formData['familyComfort'] === 'Somewhat comfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="family_neutral"
                  value="Neutral"
                  name="familyComfort"
                  onChange={handleChangeFamilyComfort}
                  checked={formData['familyComfort'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat uncomfortable"
                  id="family_somewhat_uncomfortable"
                  value="Somewhat uncomfortable"
                  name="familyComfort"
                  onChange={handleChangeFamilyComfort}
                  checked={formData['familyComfort'] === 'Somewhat uncomfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very uncomfortable"
                  id="family_very_uncomfortable"
                  value="Very uncomfortable"
                  name="familyComfort"
                  onChange={handleChangeFamilyComfort}
                  checked={formData['familyComfort'] === 'Very uncomfortable'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 9 */}
            <Form.Group className='mb-3'>
              <Form.Label>9. How comfortable do you feel discussing LGBTQ topics with your friends?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very comfortable"
                  id="friends_very_comfortable"
                  value="Very comfortable"
                  name="friendsComfort"
                  onChange={handleChangeFriendsComfort}
                  checked={formData['friendsComfort'] === 'Very comfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat comfortable"
                  id="friends_somewhat_comfortable"
                  value="Somewhat comfortable"
                  name="friendsComfort"
                  onChange={handleChangeFriendsComfort}
                  checked={formData['friendsComfort'] === 'Somewhat comfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="friends_neutral"
                  value="Neutral"
                  name="friendsComfort"
                  onChange={handleChangeFriendsComfort}
                  checked={formData['friendsComfort'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat uncomfortable"
                  id="friends_somewhat_uncomfortable"
                  value="Somewhat uncomfortable"
                  name="friendsComfort"
                  onChange={handleChangeFriendsComfort}
                  checked={formData['friendsComfort'] === 'Somewhat uncomfortable'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very uncomfortable"
                  id="friends_very_uncomfortable"
                  value="Very uncomfortable"
                  name="friendsComfort"
                  onChange={handleChangeFriendsComfort}
                  checked={formData['friendsComfort'] === 'Very uncomfortable'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 10 */}
            <Form.Group className='mb-3'>
              <Form.Label>10. Have you accessed LGBTQ support services or organizations in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="lgbtq_yes"
                  value="Yes"
                  name="lgbtqSupport"
                  onChange={handleChangeLgbtqSupport}
                  checked={formData['lgbtqSupport'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="lgbtq_no"
                  value="No"
                  name="lgbtqSupport"
                  onChange={handleChangeLgbtqSupport}
                  checked={formData['lgbtqSupport'] === 'No'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Unsure"
                  id="lgbtq_unsure"
                  value="Unsure"
                  name="lgbtqSupport"
                  onChange={handleChangeLgbtqSupport}
                  checked={formData['lgbtqSupport'] === 'Unsure'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 11 */}
            <Form.Group className='mb-3'>
              <Form.Label>11. Have you ever faced verbal or physical abuse due to your sexual orientation or gender identity in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="abuse_yes"
                  value="Yes"
                  name="abuseExperience"
                  onChange={handleChangeAbuseExperience}
                  checked={formData['abuseExperience'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="abuse_no"
                  value="No"
                  name="abuseExperience"
                  onChange={handleChangeAbuseExperience}
                  checked={formData['abuseExperience'] === 'No'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 12 */}
            <Form.Group className='mb-3'>
              <Form.Label>12. How would you rate the overall level of societal acceptance of LGBTQ individuals in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very accepting"
                  id="very_accepting"
                  value="Very accepting"
                  name="societalAcceptance"
                  onChange={handleChangeSocietalAcceptance}
                  checked={formData['societalAcceptance'] === 'Very accepting'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat accepting"
                  id="somewhat_accepting"
                  value="Somewhat accepting"
                  name="societalAcceptance"
                  onChange={handleChangeSocietalAcceptance}
                  checked={formData['societalAcceptance'] === 'Somewhat accepting'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="neutral"
                  value="Neutral"
                  name="societalAcceptance"
                  onChange={handleChangeSocietalAcceptance}
                  checked={formData['societalAcceptance'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat unaccepting"
                  id="somewhat_unaccepting"
                  value="Somewhat unaccepting"
                  name="societalAcceptance"
                  onChange={handleChangeSocietalAcceptance}
                  checked={formData['societalAcceptance'] === 'Somewhat unaccepting'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very unaccepting"
                  id="very_unaccepting"
                  value="Very unaccepting"
                  name="societalAcceptance"
                  onChange={handleChangeSocietalAcceptance}
                  checked={formData['societalAcceptance'] === 'Very unaccepting'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 13 */}
            <Form.Group className='mb-3'>
              <Form.Label>13. Have you ever felt the need to hide or conceal your sexual orientation or gender identity in certain environments (e.g., work, school, public spaces) in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="hiding_yes"
                  value="Yes"
                  name="hidingGenderIdentity"
                  onChange={handleChangeHidingGenderIdentity}
                  checked={formData['hidingGenderIdentity'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="hiding_no"
                  value="No"
                  name="hidingGenderIdentity"
                  onChange={handleChangeHidingGenderIdentity}
                  checked={formData['hidingGenderIdentity'] === 'No'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Sometimes"
                  id="hiding_sometimes"
                  value="Sometimes"
                  name="hidingGenderIdentity"
                  onChange={handleChangeHidingGenderIdentity}
                  checked={formData['hidingGenderIdentity'] === 'Sometimes'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 14 */}
            <Form.Group className='mb-3'>
              <Form.Label>14. How do you perceive the legal rights and protections for LGBTQ individuals in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very adequate"
                  id="legal_very_adequate"
                  value="Very adequate"
                  name="legalProtections"
                  onChange={handleChangeLegalProtections}
                  checked={formData['legalProtections'] === 'Very adequate'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Adequate"
                  id="legal_adequate"
                  value="Adequate"
                  name="legalProtections"
                  onChange={handleChangeLegalProtections}
                  checked={formData['legalProtections'] === 'Adequate'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="legal_neutral"
                  value="Neutral"
                  name="legalProtections"
                  onChange={handleChangeLegalProtections}
                  checked={formData['legalProtections'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Inadequate"
                  id="legal_inadequate"
                  value="Inadequate"
                  name="legalProtections"
                  onChange={handleChangeLegalProtections}
                  checked={formData['legalProtections'] === 'Inadequate'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very inadequate"
                  id="legal_very_inadequate"
                  value="Very inadequate"
                  name="legalProtections"
                  onChange={handleChangeLegalProtections}
                  checked={formData['legalProtections'] === 'Very inadequate'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 15 */}
            <Form.Group className='mb-3'>
              <Form.Label>15. How inclusive do you find LGBTQ representation in media and popular culture in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very inclusive"
                  id="very_inclusive"
                  value="Very inclusive"
                  name="cultureRepresentation"
                  onChange={handleChangeCultureRepresentation}
                  checked={formData['cultureRepresentation'] === 'Very inclusive'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat inclusive"
                  id="somewhat_inclusive"
                  value="Somewhat inclusive"
                  name="cultureRepresentation"
                  onChange={handleChangeCultureRepresentation}
                  checked={formData['cultureRepresentation'] === 'Somewhat inclusive'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="neutral"
                  value="Neutral"
                  name="cultureRepresentation"
                  onChange={handleChangeCultureRepresentation}
                  checked={formData['cultureRepresentation'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat exclusive"
                  id="somewhat_exclusive"
                  value="Somewhat exclusive"
                  name="cultureRepresentation"
                  onChange={handleChangeCultureRepresentation}
                  checked={formData['cultureRepresentation'] === 'Somewhat exclusive'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very exclusive"
                  id="very_exclusive"
                  value="Very exclusive"
                  name="cultureRepresentation"
                  onChange={handleChangeCultureRepresentation}
                  checked={formData['cultureRepresentation'] === 'Very exclusive'}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 16 */}
            <Form.Group className='mb-3'>
              <Form.Label>16. Have you participated in LGBTQ-related advocacy or activism in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Yes"
                  id="lgbtq_advocacy_yes"
                  value="Yes"
                  name="lgbtqAdvocacy"
                  onChange={handleChangeLgbtqAdvocacy}
                  checked={formData['lgbtqAdvocacy'] === 'Yes'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="No"
                  id="lgbtq_advocacy_no"
                  value="No"
                  name="lgbtqAdvocacy"
                  onChange={handleChangeLgbtqAdvocacy}
                  checked={formData['lgbtqAdvocacy'] === 'No'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Interested but haven't participated yet"
                  id="lgbtq_advocacy_interested"
                  value="Interested but haven't participated yet"
                  name="lgbtqAdvocacy"
                  onChange={handleChangeLgbtqAdvocacy}
                  checked={formData['lgbtqAdvocacy'] === "Interested but haven't participated yet"}
                  required
                />
              </div>
            </Form.Group>
            {/* Number 17 */}
            <Form.Group className='mb-3'>
              <Form.Label>17. How do you feel about the representation of LGBTQ individuals in educational curricula in the Philippines?</Form.Label><br />
              <div>
                <Form.Check
                  block
                  type="radio"
                  label="Very positive"
                  id="representation_very_positive"
                  value="Very positive"
                  name="educationalRepresentation"
                  onChange={handleChangeEducationalRepresentation}
                  checked={formData['educationalRepresentation'] === 'Very positive'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat positive"
                  id="representation_somewhat_positive"
                  value="Somewhat positive"
                  name="educationalRepresentation"
                  onChange={handleChangeEducationalRepresentation}
                  checked={formData['educationalRepresentation'] === 'Somewhat positive'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Neutral"
                  id="representation_neutral"
                  value="Neutral"
                  name="educationalRepresentation"
                  onChange={handleChangeEducationalRepresentation}
                  checked={formData['educationalRepresentation'] === 'Neutral'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Somewhat negative"
                  id="representation_somewhat_negative"
                  value="Somewhat negative"
                  name="educationalRepresentation"
                  onChange={handleChangeEducationalRepresentation}
                  checked={formData['educationalRepresentation'] === 'Somewhat negative'}
                  required
                />
                <Form.Check
                  block
                  type="radio"
                  label="Very negative"
                  id="representation_very_negative"
                  value="Very negative"
                  name="educationalRepresentation"
                  onChange={handleChangeEducationalRepresentation}
                  checked={formData['educationalRepresentation'] === 'Very negative'}
                  required
                />
              </div>
            </Form.Group>
            <Button type="submit" variant="primary"><strong>Submit</strong></Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}


const animatedTitleStyle = {
  fontSize: '40px',
  marginBottom: '0px',
  background: 'linear-gradient(120deg, #FFD700, #FF8C00, #FF1493, #4B0082, #0000FF, #228B22)',
  backgroundSize: '400% 400%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradientAnimation 10s ease infinite'
};

export default App;
