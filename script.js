// ১. স্টুডেন্টদের ডিফল্ট ডেটা
const initialStudents = [
    { name: "Md. Mizanur Rahman(Admin)", image: "Mizan.png", fb: "https://www.facebook.com/md.mizanur.rahman.207522", gender: "male" },
    { name: "Shafi Sarker", image: "Shafi Sarker.jpg", fb: "https://www.facebook.com/profile.php?id=100082292392318", gender: "male" },
    { name: "Amir Hamza", image: "Amir Hamza.jpg", fb: "https://www.facebook.com/amirhamzashehab1", gender: "male" },
    { name: "Ashiquzzaman Mahin", image: "Mahin.webp", fb: "https://www.facebook.com/mal.amin.509", gender: "male" },
    { name: "Jihadul Islam Rohan", image: "Jihadul .webp", fb: "https://www.facebook.com/jihad.rohan.33", gender: "male" },
    { name: "Khairul Basher", image: "Man.jpg", fb: "https://www.facebook.com/khairul.basher.00", gender: "male" },
    { name: "Miraj AL Jahin", image: "Miraj AL Jahin.webp", fb: "https://www.facebook.com/miraj.al.jahin.2024", gender: "male" },
    { name: "Mohotasim Jarif Chowdhury", image: "Mohotasim Jarif Chowdhury.webp", fb: "https://www.facebook.com/mohotasim.jarif.chowdhury", gender: "male" },
    { name: "Mridul Rahman Alvi", image: "Mridul Rahman Alvi.webp", fb: "https://www.facebook.com/mridul.rahman.alvi", gender: "male" },
    { name: "Sabbir Hossain Rifat", image: "Sabbir Hossain Rifat.webp", fb: "https://www.facebook.com/sabbir.prime.52", gender: "male" },
    { name: "Shamim UL Fahad Titumir", image: "Shamim Ul Fahad Titumir.webp", fb: "https://www.facebook.com/shamim.ul.fahad.titumir", gender: "male" },
    { name: "Tahsin Irteza", image: "Tahsin Irteza.webp", fb: "https://www.facebook.com/tahsin.irteza.2024", gender: "male" },
    { name: "Tarique Hasan Moin", image: "Tarique Hasan Moin.webp", fb: "https://www.facebook.com/profile.php?id=100069584136625", gender: "male" },
    { name: "Marufa Jahan Munni", image: "Munni.png", fb: "https://www.facebook.com/profile.php?id=61583189281094", gender: "female" },
    { name: "Samira Sultana", image: "Samira.webp", fb: "https://www.facebook.com/samira.sultana.563200", gender: "female" },
    { name: "Fatema Haque Isha", image: "Isha.png", fb: "https://www.facebook.com/fatemahaque.isha", gender: "female" },
    { name: "Far Jana", image: "Far Jana.webp", fb: "https://www.facebook.com/far.jana.364528", gender: "female" },
    { name: "Arifa Akter Disha", image: "Disha.webp", fb: "https://www.facebook.com/arifa.akter.disha.2025", gender: "female" },
    { name: "Amena Begum", image: " Amena Begum.webp  ", fb: "https://www.facebook.com/amena.begum.226129", gender: "female" },
    { name: "Anima Akter Antora", image: "Anima Akter Antora.webp", fb: "https://www.facebook.com/Antora224", gender: "female" },
    { name: "Jinia Jafrin", image: "Jinia Jafrin .webp", fb: "https://www.facebook.com/profile.php?id=61586591094439", gender: "female" },
    { name: "Labiba Islam", image: "Labiba Islam.webp", fb: "https://www.facebook.com/labiba.islam.2", gender: "female" },
    { name: "Maroa Murtakin", image: "Maroa Murtakin.webp", fb: "https://www.facebook.com/maroa.murtakin", gender: "female" },
    { name: "Mimislam Mim", image: "Mimislam Mim.webp", fb: "https://www.facebook.com/mimislam.mim.786401", gender: "female" },
    { name: "Nabiba Taiyeba", image: "woman.jpg", fb: "https://www.facebook.com/profile.php?id=61587657681533", gender: "female" },
    { name: "Nawshen Zahan Sithia", image: "Nawshen Zahan Sinthia.webp", fb: "https://www.facebook.com/nawshen.zahan.sinthia.2024", gender: "female" },
    { name: "Negahe Murshida", image: "Negahe Murshida.webp", fb: "https://www.facebook.com/negahe.murshida", gender: "female" },
    { name: "Nuhat Tazrin Urbi", image: "Urbi.webp", fb: "https://www.facebook.com/profile.php?id=61576445648024", gender: "female" },
    { name: "Nusrat Tabassum", image: "woman.jpg", fb: "https://www.facebook.com/profile.php?id=61585059424216", gender: "female" },
    { name: "Salina Yesmin Salina", image: "Salina Yesmin Salina.webp ", fb: "https://www.facebook.com/salinayesmin.salina.9", gender: "female" },
    { name: "Sumaiya Faruki", image: "woman.jpg", fb: "https://www.facebook.com/profile.php?id=61553691435820", gender: "female" },
    { name: "Sushan Moni", image: "Sushan Moni.webp", fb: "https://www.facebook.com/profile.php?id=61579089936334", gender: "female" },
    { name: "Tahsin Reza Nuha", image: "Tahsin Reza Nuha.webp", fb: "https://www.facebook.com/profile.php?id=61559635726773", gender: "female" },
    { name: "Tanzina Disha", image: "Tanzina Disha.webp", fb: "https://www.facebook.com/tanzina.disha.2025", gender: "female" },
    { name: "Tasfia Hoque", image: " Tasfia Hoque.webp ", fb: "https://www.facebook.com/profile.php?id=61564768203664", gender: "female" }
];

// ২. মেমোরি থেকে ডাটা লোড করা
let students = JSON.parse(localStorage.getItem("nexus_students")) || initialStudents;

const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

// ৩. স্টুডেন্ট কার্ড দেখানোর ফাংশন (ডিলিট বাটনসহ)
function showStudents() {
    if (!container) return;
    container.innerHTML = "";
    
    let searchValue = searchInput.value.toLowerCase();
    let filterValue = filterSelect.value;

    let filtered = students.filter(s => {
        let matchesSearch = s.name.toLowerCase().includes(searchValue);
        let matchesFilter = filterValue === "all" || s.gender === filterValue;
        return matchesSearch && matchesFilter;
    });

    filtered.forEach((student, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-gender", student.gender);
        
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}"/>
            <h3>${student.name}</h3>
            <p class="gender">${student.gender.toUpperCase()}</p>
            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 10px;">
                <a href="${student.fb}" target="_blank" class="fb-btn" style="flex: 1;">Facebook</a>
                <button onclick="deleteStudent(${index})" class="delete-btn" style="background: #ef4444; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer;">🗑️</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    // কার্ড দেখানোর পর স্ট্যাটাস আপডেট হবে
    updateStatistics();
}

// ৪. স্টুডেন্ট ডিলিট করার ফাংশন (অ্যাডমিন পাসওয়ার্ডসহ)
function deleteStudent(index) {
    const password = prompt("Admin পাসওয়ার্ড দিন:");
    if (password === "123") { // আপনার পছন্দের পাসওয়ার্ড
        if (confirm("আপনি কি নিশ্চিতভাবে এই স্টুডেন্ট কার্ডটি ডিলিট করতে চান?")) {
            students.splice(index, 1);
            localStorage.setItem("nexus_students", JSON.stringify(students));
            showStudents();
        }
    } else {
        alert("ভুল পাসওয়ার্ড!");
    }
}

// ৫. নতুন স্টুডেন্ট যোগ করা
function addStudent() {
    let name = document.getElementById("newName").value;
    let gender = document.getElementById("newGender").value;
    let image = document.getElementById("newImage").value || "Man.jpg";
    let fb = document.getElementById("newFb").value || "#";

    if (name === "") return alert("Please enter a name");

    students.push({ name, gender, image, fb });
    localStorage.setItem("nexus_students", JSON.stringify(students));

    showStudents();
    closeForm();

    document.getElementById("newName").value = "";
    document.getElementById("newImage").value = "";
    document.getElementById("newFb").value = "";
}

// ৬. স্ট্যাটিস্টিকস আপডেট (Male/Female কাউন্টার)
function updateStatistics() {
    const totalEl = document.getElementById('totalStudents');
    const maleEl = document.getElementById('maleCount');
    const femaleEl = document.getElementById('femaleCount');

    let total = students.length;
    let male = students.filter(s => s.gender.toLowerCase() === 'male').length;
    let female = students.filter(s => s.gender.toLowerCase() === 'female').length;

    if (totalEl) totalEl.innerText = total;
    if (maleEl) maleEl.innerText = male;
    if (femaleEl) femaleEl.innerText = female;
}

// ৭. গ্যালারি সেকশন
const myGalleryInput = document.getElementById("galleryInput");
const myGalleryDisplay = document.getElementById("galleryDisplay");
let myGalleryImages = JSON.parse(localStorage.getItem("nexus_final_gallery")) || [];

function refreshGallery() {
    if (!myGalleryDisplay) return;
    myGalleryDisplay.innerHTML = "";
    myGalleryImages.forEach((imgSrc, index) => {
        const imgCard = document.createElement("div");
        imgCard.style.cssText = "background: rgba(255,255,255,0.05); padding: 10px; border-radius: 15px; text-align: center; border: 1px solid rgba(255,255,255,0.1);";
        imgCard.innerHTML = `
            <img src="${imgSrc}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
            <button onclick="removeGalleryImg(${index})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; margin-top: 8px; cursor: pointer; font-size: 12px;">Delete</button>
        `;
        myGalleryDisplay.appendChild(imgCard);
    });
}

function removeGalleryImg(index) {
    myGalleryImages.splice(index, 1);
    localStorage.setItem("nexus_final_gallery", JSON.stringify(myGalleryImages));
    refreshGallery();
}

if (myGalleryInput) {
    myGalleryInput.addEventListener("change", function(e) {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = function(event) {
                myGalleryImages.push(event.target.result);
                localStorage.setItem("nexus_final_gallery", JSON.stringify(myGalleryImages));
                refreshGallery();
            };
            reader.readAsDataURL(file);
        });
    });
}

// ৮. অন্যান্য ইউটিলিটি ফাংশন (Scroll, Sidebar, Clock)
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

function updateTime() {
    let now = new Date();
    document.getElementById("digitalClock").innerHTML = `🕒 ${now.toLocaleTimeString()} | ${now.toLocaleDateString()}`;
}

function openForm() { document.getElementById("formBox").style.display = "block"; }
function closeForm() { document.getElementById("formBox").style.display = "none"; }
function closeModal() { document.getElementById("welcomeModal").style.display = "none"; }

// ৯. ইভেন্ট লিসেনার এবং ইনিশিয়াল লোড
if (searchInput) searchInput.addEventListener("input", showStudents);
if (filterSelect) filterSelect.addEventListener("change", showStudents);

window.addEventListener("DOMContentLoaded", () => {
    showStudents();
    refreshGallery();
    setInterval(updateTime, 1000);
});

window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (btn) btn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};
  