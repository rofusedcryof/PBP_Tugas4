document.addEventListener("DOMContentLoaded", function () {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const harapanContainer = document.getElementById("harapan-container");

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const lanjutBtn = document.getElementById("lanjutBtn");
    const kembaliBtn = document.getElementById("kembaliBtn"); // Tambahkan tombol kembali


    let nama, jumlahProdi, prodiList = [];

    const rainContainer = document.createElement("div");
    rainContainer.classList.add("rain-container");
    document.body.appendChild(rainContainer);

    function createRaindrop() {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = `${Math.random() * 300}vw`;
        drop.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
        drop.style.animationDelay = `${Math.random()}s`;
        rainContainer.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 2000);
    }

    setInterval(createRaindrop, 50); // Mempercepat hujan (sebelumnya 100ms, sekarang 50ms);

    setInterval(createRaindrop, 100);

    //reset semua form
    function resetForm() {
        document.getElementById("nama").value = "";
        document.getElementById("alamat").value = "";
        document.getElementById("telpRumah").value = "";
        document.getElementById("hp").value = "";
        document.getElementById("email").value = "";
        document.getElementById("kodePos").value = "";
        document.getElementById("jumlahProdi").value = "";
        document.getElementById("prodiSelection").innerHTML = "";
        document.getElementById("confirmData").innerHTML = "";
        document.getElementById("harapanText").innerHTML = "";
        document.getElementById("errorTlpRumah").textContent = "";
        document.getElementById("errorHp").textContent = "";
        document.getElementById("errorKodePos").textContent = "";
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("sekolah").value = "";
        document.getElementById("jurusan").value = "";
        document.getElementById("tahun").value = "";


        form1.classList.remove("hidden");
        form2.classList.add("hidden");
        form3.classList.add("hidden");
        form4.classList.add("hidden");
        harapanContainer.classList.add("hidden");
    }

    //tombol pertama: simpan data diri dan lanjut ke jumlah prodi
    btn1.addEventListener("click", function (event) {
        event.preventDefault();
        nama = document.getElementById("nama").value;
        let alamat = document.getElementById("alamat").value;
        let telpRumah = document.getElementById("telpRumah").value;
        let hp = document.getElementById("hp").value;
        let email = document.getElementById("email").value;
        let kodePos = document.getElementById("kodePos").value;
        let errorTlpRumah = document.getElementById("errorTlpRumah");
        let errorHp = document.getElementById("errorHp");
        let errorKodePos = document.getElementById("errorKodePos");
        let errorEmail = document.getElementById("errorEmail");

        let valid = true;
        errorTlpRumah.textContent = "";
        errorHp.textContent = "";
        errorKodePos.textContent = "";
        errorEmail.textContent = "";

        if (isNaN(telpRumah)){
            errorTlpRumah.textContent = "Masukkan Angka Jir";
            valid = false;
        }

        if (isNaN(hp)){
            errorHp.textContent = "Masukkan Angka Jir";
            valid = false;
        }

        if (isNaN(kodePos)){
            errorKodePos.textContent = "Masukkan Angka Jir";
            valid = false;
        }

        if (!email.includes("@")){
            errorEmail.textContent = "@ nya Jangan Lupa";
            valid = false;
        }

        if (!nama || !alamat || !telpRumah || !hp || !email || !kodePos || !sekolah || !jurusan || !tahun) {
            alert("Harap isi semua data sebelum melanjutkan.");
            return;
        }

        if (!valid) {
            return;
        }

        form1.classList.add("hidden");
        form2.classList.remove("hidden");
    });

    //tombol kedua: simpan jumlah prodi dan lanjut ke pemilihan prodi
    btn2.addEventListener("click", function () {
        jumlahProdi = parseInt(document.getElementById("jumlahProdi").value);

        if (!jumlahProdi || jumlahProdi < 2 || jumlahProdi > 3) {
            alert("Masukkan jumlah prodi yang valid! (Minimal 2, maksimal 3)");
            return;
        }

        let prodiSelection = document.getElementById("prodiSelection");
        prodiSelection.innerHTML = "";

        for (let i = 1; i <= jumlahProdi; i++) {
            let label = document.createElement("label");
            label.innerHTML = `Pilihan ${i}:`;

            let select = document.createElement("select");
            select.id = `prodi${i}`;
            select.innerHTML = `
                <option value="Pendidikan Bahasa Inggris">Pendidikan Bahasa Inggris</option>
                <option value="Pendidikan Bahasa dan Sastra Indonesia">Pendidikan Bahasa dan Sastra Indonesia</option>
                <option value="Pendidikan Sejarah">Pendidikan Sejarah</option>
                <option value="Pendidikan Ekonomi">Pendidikan Ekonomi</option>
                <option value="Pendidikan Keagamaan Katolik">Pendidikan Keagamaan Katolik</option>
                <option value="Pendidikan Matematika">Pendidikan Matematika</option>
                <option value="Pendidikan Fisika">Pendidikan Fisika</option>
                <option value="Pendidikan Biologi">Pendidikan Biologi</option>
                <option value="Pendidikan Kimia">Pendidikan Kimia</option>
                <option value="Bimbingan dan Konseling">Bimbingan dan Konseling</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Hukum">Hukum</option>
                <option value="Teknik Elektro">Teknik Elektro</option>
                <option value="Teknik Mesin">Teknik Mesin</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Farmasi">Farmasi</option>
                <option value="Psikologi">Psikologi</option>
                <option value="Matematika">Matematika</option>
                <option value="Sastra Inggris">Sastra Inggris</option>
                <option value="Sastra Indonesia">Sastra Indonesia</option>
                <option value="Sastra Jepang">Sastra Jepang</option>
                <option value="Ilmu Religi dan Budaya">Ilmu Religi dan Budaya</option>
                <option value="Filsafat Keilahian">Filsafat Keilahian</option>
                <option value="Biologi">Biologi</option>
                <option value="Kimia">Kimia</option>
                <option value="Fisika">Fisika</option>
            `;

            prodiSelection.appendChild(label);
            prodiSelection.appendChild(select);
        }

        form2.classList.add("hidden");
        form3.classList.remove("hidden");
    });

    //tombol ketiga: simpan pilihan prodi dan lanjut ke konfirmasi
    btn3.addEventListener("click", function () {
        prodiList = [];

        for (let i = 1; i <= jumlahProdi; i++) {
            let prodi = document.getElementById(`prodi${i}`).value;
            if (!prodi) {
                alert("Harap pilih semua program studi.");
                return;
            }
            prodiList.push(prodi);
        }

        document.getElementById("confirmData").innerHTML = `
            <strong>Nama:</strong> ${nama}<br>
            <strong>Pilihan Prodi:</strong> ${prodiList.join(", ")}
        `;

        form3.classList.add("hidden");
        form4.classList.remove("hidden");
    });

    //tombol lanjut: tampilkan harapan diterima di prodi pilihan
    lanjutBtn.addEventListener("click", function () {
        if (prodiList.length === 0) {
            alert("Terjadi kesalahan! Silakan pilih program studi.");
            resetForm();
            return;
        }

        let pilihanUtama = prodiList[0];

        document.getElementById("harapanText").innerHTML = `
            <p>Hallo, nama saya <strong>${nama}</strong>, saya mempunyai sejumlah <strong>${jumlahProdi}</strong> pilihan yaitu <strong>${prodiList.join(", ")}</strong>, dan saya memilih <strong>${pilihanUtama}</strong>.</p>
        `;

        form4.classList.add("hidden");
        harapanContainer.classList.remove("hidden");
    });

    //tombol kembali ke halaman awal
    kembaliBtn.addEventListener("click", function () {
        resetForm();
    });
});
