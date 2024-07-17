document.addEventListener('DOMContentLoaded', (event) => {
  const experienceDetails = document.getElementById('experience-details');
  const educationDetails = document.getElementById('education-details');
  
  const experiences = {
      'lcvm-usu': `
          <h4 class="text-2xl font-bold text bg-gray-800">Research Assistant Lecturer</h4>
          <h5 class="text-sm font-light">Medan, North Sumatera</h5>
          <p class="mt-5 text-light text-gray-200">Jan 2022 - Jan 2024 : Part Time</p>
          <div class="mt-2">
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Project Management</span>
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Software Development</span>
          </div>
          <hr class="my-5">
          <ul class="list-disc list-inside leading-10 font">
              <li>Assist with lecturer administrative problems such as filling in civil minutes and general minutes</li>
              <li>Assist in Computer Vision and Multimedia Lab Management</li>
              <li>Attend at least once a week to check the Computer Vision and Multimedia Lab. Preferred on Tuesdays, Thursdays and Fridays.</li>
              <li>Assist lecturers in research and community service activities.</li>
              <li>Become a member of Research and Community Service.</li>
          </ul>
      `,
      'iklc-usu': `
          <h4 class="text-2xl font-bold text bg-gray-800">Laboratory Assistant</h4>
          <h5 class="text-sm font-light">Medan, North Sumatera</h5>
          <p class="mt-5 text-light text-gray-200">Feb 2020 - Jan 2021 : Part Time</p>
          <div class="mt-2">
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Network Administration</span>
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Database Management</span>
          </div>
          <hr class="my-5">
          <ul class="list-disc list-inside leading-10 font">
              <li>Assist lecturers in holding learning activities in the form of practicums in the laboratory.</li>
              <li>Attend at least once a week to check the Programming Laboratory under instruction.</li>
              <li>Lab Cleanliness. Computer</li>
              <li>Checking Computer Software (Whether there is malware or not)</li>
              <li>Computer Laboratory Inventory Data Collection</li>
              <li>Preparation of Guidelines and Work Programs</li>
          </ul>
      `,
      'geometrisatu': `
          <h4 class="text-2xl font-bold text bg-gray-800">IT Staff</h4>
          <h5 class="text-sm font-light">Medan, North Sumatera</h5>
          <p class="mt-5 text-light text-gray-200">Jan 2022 - Jan 2024 : Internship</p>
          <div class="mt-2">
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Game Development</span>
              <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Graphic Design</span>
          </div>
          <hr class="my-5">
          <ul class="list-disc list-inside leading-10 font">
              <li>Designed and developed company website and games applications.</li>
              <li>Created graphic designs for game development materials.</li>
              <li>Assisted in digital marketing campaigns of game industries.</li>
          </ul>
      `
  };

  const educations = {
    'high-school': `
        <h4 class="text-2xl font-bold text bg-gray-800">SMAN 2 Balige</h4>
        <h5 class="text-sm font-light">Balige, North Sumatera</h5>
        <p class="mt-5 text-light text-gray-200">Aug 2016 - Aug 2019 : Student</p>
        <div class="mt-2">
            <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Science</span>
        </div>
        <hr class="my-5">
        <ul class="list-disc list-inside leading-10 font">
            <li>One of the best high-school in North Sumatera</li>
            <li>Grade A+ (3.85)</li>
        </ul>
    `,
    'university': `
        <h4 class="text-2xl font-bold text bg-gray-800">Universitas Sumatera Utara</h4>
        <h5 class="text-sm font-light">Medan, North Sumatera</h5>
        <p class="mt-5 text-light text-gray-200">Sept 2020 - May 2024 : College Student</p>
        <div class="mt-2">
            <span class="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">Computer Science</span>
        </div>
        <hr class="my-5">
        <ul class="list-disc list-inside leading-10 font">
            <li>Achieve GPA(3.95)</li>
            <li>Complete Bachelor Degree of Computer Science in 3.8 years</li>
        </ul>
    `
};

  document.querySelectorAll('[data-info]').forEach(item => {
      item.addEventListener('click', event => {
          const infoKey = event.currentTarget.getAttribute('data-info');
          experienceDetails.innerHTML = experiences[infoKey];
          educationDetails.innerHTML = educations[infoKey];
      });
  });
});
