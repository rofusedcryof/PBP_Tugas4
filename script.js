document.addEventListener("DOMContentLoaded", function () {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const harapanContainer = document.getElementById("harapan-container");
    const sekolahAsal = document.getElementById("sekolahAsal"); // Tambahkan form 5
    const sekolah = document.getElementById("sekolah"); // Tambahkan form 5
    const jurusanSMA = document.getElementById("jurusan"); // Tambahkan form 5
    const jurusanSMK = document.getElementById("jurusanSMK"); // Tambahkan form 5
    const tahunMasuk = document.getElementById("tahunMasuk"); // Tambahkan form 5
    const tahunLulus = document.getElementById("tahunLulus"); // Tambahkan form 5
    const averageNilai = document.getElementById("averageNilai"); // Tambahkan form 5
    const btn5 = document.getElementById("btn5"); // Tambahkan form 5

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const lanjutBtn = document.getElementById("lanjutBtn");
    const kembaliBtn = document.getElementById("kembaliBtn"); // Tambahkan tombol kembali


    let nama, jumlahProdi, prodiList = [];

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

        form1.classList.remove("hidden");
        form2.classList.add("hidden");
        form3.classList.add("hidden");
        form4.classList.add("hidden");
        harapanContainer.classList.add("hidden");
    }

    //tombol pertama: simpan data diri dan lanjut ke jumlah prodi
    btn1.addEventListener("click", function () {
        nama = document.getElementById("nama").value;
        let alamat = document.getElementById("alamat").value;
        let telpRumah = document.getElementById("telpRumah").value;
        let hp = document.getElementById("hp").value;
        let email = document.getElementById("email").value;
        let kodePos = document.getElementById("kodePos").value;

        if (!nama || !alamat || !telpRumah || !hp || !email || !kodePos) {
            alert("Harap isi semua data sebelum melanjutkan.");
            return;
        }

        form1.classList.add("hidden");
        form2.classList.remove("hidden");
    });

    //tombol kedua: simpan jumlah prodi dan lanjut ke pemilihan prodi
    btn2.addEventListener("click", function () {
        jumlahProdi = parseInt(document.getElementById("jumlahProdi").value);

        if (!jumlahProdi || jumlahProdi < 1) {
            alert("Masukkan jumlah prodi yang valid!");
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
                <option value="Informatika">Informatika</option>
                <option value="Matematika">Matematika</option>
                <option value="Teknik Elektro">Teknik Elektro</option>
                <option value="Teknik Mesin">Teknik Mesin</option>
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
