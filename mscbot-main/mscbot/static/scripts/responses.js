function getBotResponse(input) {
    if (input == "Apa Kabar?") {
        return "Baik";
    } else if (input == "pilih 1/2") {
        return "1 ";
    } else if (input == "Baik") {
        return "Sehat-sehat yaa!";
    }

    // Simple responses
    if (input == "hai") {
        return "Hai! Apa Kabar?";
    } else if (input == "bye") {
        return "GoodBye!!";
    } else {
        return "Maaf belum bisa dijawab ya!";
    }
}