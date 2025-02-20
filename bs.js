const brawlers = {
    "Shelly": "https://static.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png/revision/latest?cb=20200304182226",
    "Nita": "https://static.wikia.nocookie.net/brawlstars/images/9/9f/Nita_Portrait.png/revision/latest?cb=20200304182317",
    "Colt": "https://static.wikia.nocookie.net/brawlstars/images/0/08/Colt_Portrait.png/revision/latest?cb=20210115110713",
    "Bull": "https://static.wikia.nocookie.net/brawlstars/images/4/4a/Bull_Portrait.png/revision/latest?cb=20200304182325",
    "Brock": "https://static.wikia.nocookie.net/brawlstars/images/f/f9/Brock_Portrait.png/revision/latest?cb=20240830201725",
    "Dynamike": "https://static.wikia.nocookie.net/brawlstars/images/6/64/Dynamike_Portrait.png/revision/latest?cb=20200304182305",
    "Bo": "https://static.wikia.nocookie.net/brawlstars/images/3/30/Bo_Portrait.png/revision/latest?cb=20191013135616",
    "Tick": "https://static.wikia.nocookie.net/brawlstars/images/7/72/Tick_Portrait.png/revision/latest?cb=20190629012550",
    "A.R.K.A.D.": "https://static.wikia.nocookie.net/brawlstars/images/0/0b/8-Bit_Portrait.png/revision/latest?cb=20191012200012",
    "Eliz@": "https://static.wikia.nocookie.net/brawlstars/images/a/a4/Emz_Portrait.png/revision/latest?cb=20200304182125",
    "El Costo": "https://static.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png/revision/latest?cb=20191012200018",
    "Bartaba": "https://static.wikia.nocookie.net/brawlstars/images/a/a1/Barley_Portrait.png/revision/latest?cb=20200304182055",
    "Poco": "https://static.wikia.nocookie.net/brawlstars/images/5/59/Poco_Portrait.png/revision/latest?cb=20210115111016",
    "Rosa": "https://static.wikia.nocookie.net/brawlstars/images/9/94/Rosa_Portrait.png/revision/latest?cb=20200303144700",
    "Ricochet": "https://static.wikia.nocookie.net/brawlstars/images/e/e1/Rico_Portrait.png/revision/latest?cb=20200304182045",
    "Darryl": "https://static.wikia.nocookie.net/brawlstars/images/4/46/Darryl_Portrait.png/revision/latest?cb=20200317100419",
    "Penny": "https://static.wikia.nocookie.net/brawlstars/images/8/8d/Penny_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20220629081359",
    "Carl": "https://static.wikia.nocookie.net/brawlstars/images/1/19/Carl_Portrait.png/revision/latest?cb=20200304182115",
    "Jacky": "https://static.wikia.nocookie.net/brawlstars/images/0/03/Jacky_Portrait.png/revision/latest?cb=20200317100434",
    "Poly": "https://static.wikia.nocookie.net/brawlstars/images/f/f0/Piper_Portrait.png/revision/latest?cb=20200304182144",
    "Pam": "https://static.wikia.nocookie.net/brawlstars/images/d/dc/Pam_Portrait.png/revision/latest?cb=20200513143851",
    "Frank": "https://static.wikia.nocookie.net/brawlstars/images/6/63/Frank_Portrait.png/revision/latest?cb=20200304182409",
    "Billie": "https://static.wikia.nocookie.net/brawlstars/images/c/c2/Bibi_Portrait.png/revision/latest?cb=20200303144656",
    "Béa": "https://static.wikia.nocookie.net/brawlstars/images/a/ae/Bea_Portrait.png/revision/latest?cb=20200317100451",
    "Nani": "https://static.wikia.nocookie.net/brawlstars/images/c/c0/Nani_Portrait.png/revision/latest?cb=20200513144321",
    "Edgar": "https://static.wikia.nocookie.net/brawlstars/images/b/b4/Edgar_Portrait.png/revision/latest?cb=20201218104515",
    "Griff": "https://static.wikia.nocookie.net/brawlstars/images/c/c9/Griff_Portrait.png/revision/latest?cb=20210616224003",
    "Grom": "https://static.wikia.nocookie.net/brawlstars/images/f/f5/Grom_Portrait.png/revision/latest?cb=20211218013507",
    "Bonnie": "https://static.wikia.nocookie.net/brawlstars/images/f/f0/Bonnie_Portrait.png/revision/latest?cb=20220429065440",
    "Fang": "https://static.wikia.nocookie.net/brawlstars/images/b/b8/Fang_Portrait.png/revision/latest?cb=20211218013643",
    "Gray": "https://static.wikia.nocookie.net/brawlstars/images/c/c6/Gray_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20221214180416",
    "Willow": "https://static.wikia.nocookie.net/brawlstars/images/f/fb/Willow_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230302001454",
    "Maisie": "https://static.wikia.nocookie.net/brawlstars/images/a/a1/Maisie_Portrait.png/revision/latest?cb=20230426150815",
    "Hank": "https://static.wikia.nocookie.net/brawlstars/images/2/29/Hank_Portrait.png/revision/latest?cb=20230427111021",
    "Pearl": "https://static.wikia.nocookie.net/brawlstars/images/0/05/Pearl_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230905134343",
    "Jessie": "https://static.wikia.nocookie.net/brawlstars/images/4/4e/Jessie_Portrait.png/revision/latest?cb=20211122033625",
    "Chuck": "https://static.wikia.nocookie.net/brawlstars/images/7/7f/Chuck_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230907153950",
    "Gus": "https://static.wikia.nocookie.net/brawlstars/images/2/2c/Gus_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20220901142403",
    "Stu": "https://static.wikia.nocookie.net/brawlstars/images/c/c8/Stu_Portrait.png/revision/latest?cb=20210309220216",
    "Gaël": "https://static.wikia.nocookie.net/brawlstars/images/3/3f/Gale_Portrait.png/revision/latest?cb=20200513143833",
    "Colette": "https://static.wikia.nocookie.net/brawlstars/images/e/e8/Colette_Portrait.png/revision/latest?cb=20200911212332",
    "Belle": "https://static.wikia.nocookie.net/brawlstars/images/8/82/Belle_Portrait.png/revision/latest?cb=20240913100835",
    "Ash": "https://static.wikia.nocookie.net/brawlstars/images/9/92/Ash_Portrait.png/revision/latest?cb=20210825233042",
    "Lola": "https://static.wikia.nocookie.net/brawlstars/images/9/9f/Lola_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20211027003449",
    "Sam": "https://static.wikia.nocookie.net/brawlstars/images/f/fc/Sam_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20221003185538",
    "Mandy": "https://static.wikia.nocookie.net/brawlstars/images/7/75/Mandy_Portrait.png/revision/latest?cb=20221214175140",
    "Larry & Lawrie": "https://static.wikia.nocookie.net/brawlstars/images/3/3a/Larry_%26_Lawrie_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20231212185837",
    "Angelo": "https://static.wikia.nocookie.net/brawlstars/images/8/8b/Angelo_Portrait.png/revision/latest?cb=20240226185316",
    "Berry": "https://static.wikia.nocookie.net/brawlstars/images/b/b9/Berry_Portrait.png/revision/latest?cb=20240624212829",
    "Shade": "https://static.wikia.nocookie.net/brawlstars/images/7/7a/Shade_Portrait.png/revision/latest?cb=20241029204306",
    "Meeple": "https://static.wikia.nocookie.net/brawlstars/images/f/ff/Meeple_Portrait.png/revision/latest?cb=20241211221517",
    "Mortis": "https://static.wikia.nocookie.net/brawlstars/images/b/b4/Mortis_Portrait.png/revision/latest?cb=20200304182441",
    "Tara": "https://static.wikia.nocookie.net/brawlstars/images/4/49/Tara_Portrait.png/revision/latest?cb=20190630191241",
    "D'jinn": "https://static.wikia.nocookie.net/brawlstars/images/7/7c/Gene_Portrait.png/revision/latest?cb=20200304182105",
    "Max": "https://static.wikia.nocookie.net/brawlstars/images/8/83/Max_Portrait.png/revision/latest?cb=20201022114240",
    "Wally": "https://static.wikia.nocookie.net/brawlstars/images/4/4d/Sprout_Portrait.png/revision/latest?cb=20200404120105",
    "Byron": "https://static.wikia.nocookie.net/brawlstars/images/f/f6/Byron_Portrait.png/revision/latest?cb=20201218104523",
    "Squeak": "https://static.wikia.nocookie.net/brawlstars/images/0/04/Squeak_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210407173212",
    "Médor": "https://static.wikia.nocookie.net/brawlstars/images/6/69/Ruffs_Portrait.png/revision/latest?cb=20210204010252",
    "Buzz": "https://static.wikia.nocookie.net/brawlstars/images/2/2c/Buzz_Portrait.png/revision/latest?cb=20231213030117",
    "Eve": "https://static.wikia.nocookie.net/brawlstars/images/8/8c/Eve_Portrait.png/revision/latest?cb=20220302034552",
    "Janet": "https://static.wikia.nocookie.net/brawlstars/images/8/8b/Janet_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20231213030713",
    "Otis": "https://static.wikia.nocookie.net/brawlstars/images/5/58/Otis_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20220629092104",
    "Charlie": "https://static.wikia.nocookie.net/brawlstars/images/4/4c/Charlie_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20240425211607",
    "Mico": "https://static.wikia.nocookie.net/brawlstars/images/c/cf/Mico_Portrait.png/revision/latest?cb=20231213025610",
    "Lily": "https://static.wikia.nocookie.net/brawlstars/images/8/8d/Lily_Portrait.png/revision/latest?cb=20240422220203",
    "Ollie": "https://static.wikia.nocookie.net/brawlstars/images/a/a3/Ollie_Portrait.png/revision/latest?cb=20241214062923",
    "Spike": "https://static.wikia.nocookie.net/brawlstars/images/2/22/Spike_Portrait.png/revision/latest?cb=20200304182450",
    "Corbac": "https://static.wikia.nocookie.net/brawlstars/images/6/6f/Crow_Portrait.png/revision/latest?cb=20200706075842",
    "Léon": "https://static.wikia.nocookie.net/brawlstars/images/4/48/Leon_Portrait.png/revision/latest?cb=20200304182803",
    "Émeri": "https://static.wikia.nocookie.net/brawlstars/images/e/e3/Sandy_Portrait.png/revision/latest?cb=20200304182134",
    "Ambre": "https://static.wikia.nocookie.net/brawlstars/images/9/96/Amber_Portrait.png/revision/latest?cb=20201022114232",
    "Meg": "https://static.wikia.nocookie.net/brawlstars/images/5/58/Meg_Portrait.png/revision/latest?cb=20210925184245",
    "Surge": "https://static.wikia.nocookie.net/brawlstars/images/2/27/Surge_Portrait.png/revision/latest?cb=20200706075845",
    "Chester": "https://static.wikia.nocookie.net/brawlstars/images/3/38/Chester_Portrait.png/revision/latest?cb=20221214180528",
    "Cordeluis": "https://static.wikia.nocookie.net/brawlstars/images/a/aa/Cordelius_Portrait.png/revision/latest?cb=20230627183609",
    "Kit": "https://static.wikia.nocookie.net/brawlstars/images/7/72/Kit_Portrait.png/revision/latest?cb=20231213190452Ò",
    "Draco": "https://static.wikia.nocookie.net/brawlstars/images/c/c2/Draco_Portrait.png/revision/latest?cb=20240423225853",
    "Kenji": "https://static.wikia.nocookie.net/brawlstars/images/b/bb/Kenji_Portrait.png/revision/latest?cb=20240829203315",
    "Monsieur M.": "https://static.wikia.nocookie.net/brawlstars/images/0/08/Mr._P_Portrait.png/revision/latest?cb=20200317100443",
    "Lou": "https://static.wikia.nocookie.net/brawlstars/images/0/0b/Lou_Portrait.png/revision/latest?cb=20201111223555",
    "Buster": "https://static.wikia.nocookie.net/brawlstars/images/a/ad/Buster_Portrait.png/revision/latest?cb=20221115022439",
    "R-T": "https://static.wikia.nocookie.net/brawlstars/images/f/f6/R-T_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20230301172401",
    "Melody": "https://static.wikia.nocookie.net/brawlstars/images/1/1c/Melodie_Portrait.png/revision/latest?cb=20240228113513",
    "Clancy": "https://static.wikia.nocookie.net/brawlstars/images/f/f0/Clancy_Portrait.png/revision/latest?cb=20240625155858",
    "Moe": "https://static.wikia.nocookie.net/brawlstars/images/9/98/Moe_Portrait.png/revision/latest?cb=20240826202544",
    "Juju": "https://static.wikia.nocookie.net/brawlstars/images/0/08/Juju_Portrait.png/revision/latest?cb=20241028193755",
    "Doug": "https://static.wikia.nocookie.net/brawlstars/images/5/5a/Doug_Portrait.png/revision/latest?cb=20230627183627"
};

function genererObjectif() {
    const brawlerNames = Object.keys(brawlers);
    const brawler = brawlerNames[Math.floor(Math.random() * brawlerNames.length)];
    let rang = Math.floor(Math.random() * 27) +25;

if (rang === 51) {
    rang = "Max";
}

    document.getElementById("objectif").innerText = `Atteindre le rang ${rang} avec ${brawler}`;

    const brawlerImg = document.getElementById("brawlerImage");
    brawlerImg.src = brawlers[brawler];
    brawlerImg.classList.remove("hidden");

    const rangImg = document.getElementById("rangImage");
    rangImg.src = rang === "Max" ? "https://static.wikia.nocookie.net/brawlstars/images/8/85/Rank_Max.png/revision/latest/scale-to-width-down/32?cb=20241103105602" : `images/images_rank${rang}.png`;
    rangImg.classList.remove("hidden");
}