/**
 * UPHSD-LP Campus Navigator - Paths Data
 * Contains navigation paths between campus locations, including specific points to follow
 * These paths allow for turn-by-turn navigation across the campus
 */

// Import THREE.js for Vector3 if available
let THREE;
if (typeof window !== 'undefined' && window.THREE) {
    THREE = window.THREE;
} else if (typeof module !== 'undefined') {
    try {
        THREE = require('three');
    } catch (e) {
        // Create a minimal THREE.Vector3 implementation if THREE.js is not available
        THREE = {
            Vector3: class Vector3 {
                constructor(x, y, z) {
                    this.x = x || 0;
                    this.y = y || 0;
                    this.z = z || 0;
                }
            }
        };
    }
}

const paths = {
    // [Start - Main Entrance]
    mainEntrance: {
        name: "Main Entrance",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            admissionOffice: {
                                name: "Admission Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-16, 13, -24),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/admissionOffice.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-17.8, 13, -24),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "CCS Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-17.8, 13, -24),
                                    new THREE.Vector3(-22, 13, -24),
                                    new THREE.Vector3(-22, 14, -24),
                                    new THREE.Vector3(-20, 14, -24),
                                    new THREE.Vector3(-19.5, 14, -20),
                                ],
                                duration: 1500,
                                panoramaImage: '/assets/panoramas/ccsBuilding3.jpg'
                            }
                        }
                    }
                }
            },
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/auditorium.jpg'
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            }
                        },
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            cbaa: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-75, 13, -1),
                                    new THREE.Vector3(-85, 13, -5),
                                    new THREE.Vector3(-85, 14, -10),
                                    new THREE.Vector3(-88, 14, -10),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cbaamedDeanOffice.jpg'
                            },
                            medtech: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cbaamedDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cbaamedDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/collegeOfPharmacy.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, -1),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    first: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                    
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-30, 13, -21)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            },
                            accounting: {
                                name: "Accounting",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-26, 13, -8)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/accounting.jpg'
                            }
                        }
                    },
                    third: {
                        name: "Third Floor",
                        rooms: {
                            martimeDeanOffice: {
                                name: "College of Maritime Dean's Office",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-38, 13, -6),
                                    new THREE.Vector3(-38, 14, -6),
                                    new THREE.Vector3(-38, 18, -6),
                                    new THREE.Vector3(-30, 18, -7),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/maritimeDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(68, 13, 75),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(-10, 13, -33),
                                    new THREE.Vector3(-8, 13, -19),
                                    new THREE.Vector3(-4, 13, -19),
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            },
        }
    // [Start - Admin]
    },
    adminBuilding: {
        name: "Administration Building",
        paths: {
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/auditorium.jpg'
                            }
                        }
                    }
                }
            },
            toMainEntrance: {
                name: "Main Entrance",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Entrance",
                                points: [
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-15, 13, -35),
                                    new THREE.Vector3(-8, 13, -34),
                                    new THREE.Vector3(1, 13, -33),
                                    new THREE.Vector3(23, 13, -36),
                                    new THREE.Vector3(29, 13, -32),
                                    new THREE.Vector3(54, 13, -35),
                                    new THREE.Vector3(68, 13, 75)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/pathway_ulane1.jpg'
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    first: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                    
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Gound Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-30, 13, -22)
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            }
                        }
                    },
                    third: {
                        name: "Third Floor",
                        rooms: {
                            main: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-22, 13, -30),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-38, 13, -6),
                                    new THREE.Vector3(-38, 14, -6),
                                    new THREE.Vector3(-38, 18, -6),
                                    new THREE.Vector3(-30, 18, -7),
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            },
            toNewHighSchoolBuilding: {
                name: "New High School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-54, 13, -39),
                                    new THREE.Vector3(-59, 13, -65),
                                    new THREE.Vector3(-62, 13, -65)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/newHighSchoolBuilding.jpg'
                            }
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-18, 13, -24),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-5, 13, -21)
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            }
        }
    // [Start - New Grade School]
    },
    newGradeSchoolBuilding: {
        name: "New Gradeschool Building",
        paths: {
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -45)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/auditorium.jpg'
                            }
                        }
                    }
                }
            },
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-18, 13, -24)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            },
                            admissionOffice: {
                                name: "Admission Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-16, 13, -23),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/admissionOffice.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            ccsDeanOffice: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-20, 13, -24),
                                    new THREE.Vector3(-20, 13, -26),
                                    new THREE.Vector3(-20, 14, -26),
                                    new THREE.Vector3(-18, 14, -26),
                                    new THREE.Vector3(-17, 14, -23),
                                ],
                                duration: 30000
                            },
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-13, 13, -25),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    first: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-14, 13, -23),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-14, 13, -23),
                                    new THREE.Vector3(-30, 13, -21)
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            }
                        }
                    },
                    third: {
                        name: "Third Floor",
                        rooms: {
                            main: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-5, 13, -21),
                                    new THREE.Vector3(-14, 13, -23),
                                    new THREE.Vector3(-23, 13, -24),
                                    new THREE.Vector3(-27, 13, -23),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-38, 13, -6),
                                    new THREE.Vector3(-38, 14, -6),
                                    new THREE.Vector3(-38, 18, -6),
                                    new THREE.Vector3(-30, 18, -7),
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            }
        }
    },
    // [Start - Library]
    library: {
        name: "Library and Auditorium",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-23, 13, -30),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-23, 13, -30),
                                    new THREE.Vector3(-22, 13, -27),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-23, 13, -30),
                                    new THREE.Vector3(-22, 13, -27),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -28),
                                    new THREE.Vector3(-23, 13, -28),
                                    new THREE.Vector3(-23, 14, -28),
                                    new THREE.Vector3(-19, 14, -29),
                                    new THREE.Vector3(-18, 14, -24),
                                ],
                                duration: 4000,
                                panoramaImage: '/assets/panoramas/ccsBuilding3.jpg'
                            },
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                    
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-75, 13, -35),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                            
                        }
                    }
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-5, 13, -21)
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    first: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                    
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-25, 13, -22),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-57, 13, -39),
                                    new THREE.Vector3(-54, 13, -26),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Third Floor",
                        rooms: {
                            martimeDeanOffice: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-70, 13, -53),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-57, 13, -39),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-56, 13, -26),
                                    new THREE.Vector3(-56, 14, -26),
                                    new THREE.Vector3(-56, 18, -26),
                                    new THREE.Vector3(-30, 18, -30),
                                    new THREE.Vector3(-28, 18, -8),
                                    new THREE.Vector3(-35, 18, -7),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/maritimeDeanOffice.jpg'
                            }
                        }
                    }
                }
            }
        }
    // [Start - CEAT]
    },
    CEAT: {
        name: "College of Engineering, Architecture and Technologies",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -25),
                                    new THREE.Vector3(-20, 13, -25)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -25),
                                    new THREE.Vector3(-20, 13, -25),
                                    new THREE.Vector3(-20, 13, -21),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -25),
                                    new THREE.Vector3(-20, 13, -25),
                                    new THREE.Vector3(-20, 13, -21),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -25),
                                    new THREE.Vector3(-23, 13, -25),
                                    new THREE.Vector3(-23, 13, -28),
                                    new THREE.Vector3(-23, 14, -28),
                                    new THREE.Vector3(-19, 14, -29),
                                    new THREE.Vector3(-18, 14, -24),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/ccsBuilding3.jpg'
                            }
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-5, 13, -21)
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            },
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-84, 13, -33),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/auditorium.jpg'
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -27),
                                    new THREE.Vector3(-54, 13, -32),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-28, 13, -22),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -27),
                                    new THREE.Vector3(-54, 13, -32),
                                    new THREE.Vector3(-54, 13, -26),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            }
                        }
                    },
                    third: {
                        name: "Third Floor",
                        rooms: {
                            martimeDeanOffice: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -27),
                                    new THREE.Vector3(-54, 13, -32),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-56, 13, -26),
                                    new THREE.Vector3(-56, 14, -26),
                                    new THREE.Vector3(-56, 18, -26),
                                    new THREE.Vector3(-30, 18, -30),
                                    new THREE.Vector3(-28, 18, -8),
                                    new THREE.Vector3(-35, 18, -7),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/maritimeDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
        }
    },
    // [Start - Criminology]
    criminologyBuilding: {
        name: "College of Criminology Building",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -30),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -20),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -20),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-23, 13, -23),
                                    new THREE.Vector3(-23, 13, -25),
                                    new THREE.Vector3(-23, 13, -28),
                                    new THREE.Vector3(-23, 14, -28),
                                    new THREE.Vector3(-19, 14, -29),
                                    new THREE.Vector3(-18, 14, -24),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/ccsBuilding3.jpg'
                            },
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -20),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-5, 13, -21)
                                ],
                                duration: 13000,
                            }
                        }
                    }
                }
            },
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53)
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-29, 13, -21),
                                    new THREE.Vector3(-25, 13, -7),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    first: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-28, 13, -22),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-54, 13, -32),
                                    new THREE.Vector3(-80, 13, -27),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    third: {
                        name: "Third Floor",
                        rooms: {
                            martimeDeanOffice: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-35, 13, -20),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-38, 13, -6),
                                    new THREE.Vector3(-38, 14, -6),
                                    new THREE.Vector3(-38, 18, -6),
                                    new THREE.Vector3(-30, 18, -7),
                                ],
                                duration: 30000,
                            }
                        }
                    }
                }
            }
        }
    },
    // [Start - CITHM]
    CITHM: {
        name: "College of Internation Tourism and Hospitality Management",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-21, 13, -30),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-27, 13, -30),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-29, 13, -44),
                                    new THREE.Vector3(-26, 13, -28),
                                    new THREE.Vector3(-23, 13, -28),
                                    new THREE.Vector3(-23, 14, -28),
                                    new THREE.Vector3(-19, 14, -29),
                                    new THREE.Vector3(-18, 14, -24),
                                ],
                                duration: 30000
                            },
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-28, 13, -44),
                                    new THREE.Vector3(-27, 13, -37),
                                    new THREE.Vector3(-16, 13, -39),
                                    new THREE.Vector3(-12, 13, -20),
                                    new THREE.Vector3(-5, 13, -21),
                                ],
                                duration: 30000
                            }
                        }
                    }
                }
            },
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/library.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/auditorium.jpg'
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -47),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-80, 13, -26),
                                    new THREE.Vector3(-82, 13, -25),
                                    new THREE.Vector3(-77, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-81, 14, 3),
                                    new THREE.Vector3(-82, 14, -1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-100, 13, -31),
                                    new THREE.Vector3(-100, 14, -31),
                                    new THREE.Vector3(-98, 14, -32)
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-30, 13, -30),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 14000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewCollegeBuilding: {
                name: "New College Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-53, 13, -28),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/europeanGarden1.jpg'
                            }
                        }
                    },
                    third: {
                        name: "Third Floor",
                        rooms: {
                            main: {
                                name: "College of Maritime Dean's  Office",
                                points: [
                                    new THREE.Vector3(-103, 13, -54),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-56, 13, -26),
                                    new THREE.Vector3(-56, 14, -26),
                                    new THREE.Vector3(-56, 18, -26),
                                    new THREE.Vector3(-30, 18, -30),
                                    new THREE.Vector3(-28, 18, -8),
                                    new THREE.Vector3(-35, 18, -7),
                                ],
                                duration: 14000,
                                panoramaImage: '/assets/panoramas/maritimeDeanOffice.jpg'
                            }
                        }
                    }
                }
            }
        }
    // [Start - New College Building]
    },
    NewCollegeBuilding: {
        name: "New College Building",
        paths: {
            toAdminBuilding: {
                name: "Administration Building",
                floors: {
                    first: {
                        name: "Main",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-30, 13, -22),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-21, 13, -30),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/adminBuilding.jpg'
                            },
                            registrar: {
                                name: "Registrar",
                                points: [
                                    new THREE.Vector3(-30, 13, -22),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-20, 13, -19),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/registrar.jpg'
                            },
                            cashier: {
                                name: "Cashier",
                                points: [
                                    new THREE.Vector3(-30, 13, -22),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-20, 13, -19),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/cashier.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            room201: {
                                name: "College of Computer Studies Dean's Office",
                                points: [
                                    new THREE.Vector3(-30, 13, -22),
                                    new THREE.Vector3(-21, 13, -23),
                                    new THREE.Vector3(-23, 13, -28),
                                    new THREE.Vector3(-23, 14, -28),
                                    new THREE.Vector3(-19, 14, -29),
                                    new THREE.Vector3(-18, 14, -24),
                                ],
                                duration: 13000,
                                panoramaImage: '/assets/panoramas/ccsBuilding3.jpg'
                            },
                        }
                    }
                }
            },
            toLibrary: {
                name: "Library And Auditorium",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Library",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-57, 13, -39),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 13, -53),
                                ],
                                duration: 13000,
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Auditorium",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-57, 13, -39),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-70, 14, -53),
                                ],
                                duration: 13000,
                            }
                        }
                    }
                }
            },
            toOldGradeSchoolBuilding: {
                name: "Old Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            schoolDirectorOffice: {
                                name: "School Director Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-80, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/schoolDirectorOffice.jpg'
                            },
                            graduateSchoolProgramChairpersonOffice: {
                                name: "Graduate School Program Chairperson Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-84, 13, 1),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/gspcOffice.jpg'
                            },
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "College of Business Administration Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansMEDTECH: {
                                name: "College of Medical Technology Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-84, 14, 4),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg'
                            },
                            DeansNURSING: {
                                name: "College of Nursing Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-83, 14, 3),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/nursingDeanOffice.jpg'
                            },
                            DeansPTOTRT: {
                                name: "College of PT/ OT/ RT Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/PTOTRTDeanOffice.jpg'
                            },
                            DeansCAS: {
                                name: "College of Arts and Science Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-82, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CASDeanOffice.jpg'
                            },
                            DeansPharma: {
                                name: "College of Pharmacy Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-80, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/CPDeanOffice.jpg'
                            },
                            DeansRESEARCH: {
                                name: "Research and Development Center ",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/researchAndDevelopmentCenter.jpg'
                            },
                            DeansEDUC: {
                                name: "College of Education Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/EDUCOffice.jpg'
                            },
                            DeansVP: {
                                name: "Office of Executive Vice President",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/VPOffice.jpg'
                            },
                            DeansSHS: {
                                name: "SHS Principal Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-78, 13, -24),
                                    new THREE.Vector3(-73, 13, 0),
                                    new THREE.Vector3(-90, 13, 4),
                                    new THREE.Vector3(-90, 14, 4),
                                    new THREE.Vector3(-75, 14, 2),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/SHSOffice.jpg'
                            }
                        }
                    },
                }
            },
            toCITHM: {
                name: "College of Tourism and Hospitality Management",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            lobby: {
                                name: "Lobby",
                                points: [
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-103, 13, -54)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/hospitalityManagement.jpg'
                            }
                        }
                    },
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-53, 13, -28),
                                    new THREE.Vector3(-67, 13, -37),
                                    new THREE.Vector3(-77, 13, -35),
                                    new THREE.Vector3(-94, 13, -49),
                                    new THREE.Vector3(-102, 13, -48),
                                    new THREE.Vector3(-100, 13, -54),
                                    new THREE.Vector3(-100, 14, -54),
                                    new THREE.Vector3(-100, 14, -58),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/cithmDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCEAT: {
                name: "College of Engineering, Architecture and Technologies",
                floors: {
                    second: {
                        name: "Second Floor",
                        rooms: {
                            main: {
                                name: "Dean's Office",
                                points: [
                                    new THREE.Vector3(-54, 13, -26),
                                    new THREE.Vector3(-54, 13, -32),
                                    new THREE.Vector3(-80, 13, -27),
                                    new THREE.Vector3(-81, 13, -31),
                                    new THREE.Vector3(-95, 13, -40),
                                    new THREE.Vector3(-100, 13, -39),
                                    new THREE.Vector3(-100, 13, -31)
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/engineeringDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toCRIM: {
                name: "College of Criminology Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Criminology Dean's Office",
                                points: [
                                    new THREE.Vector3(-38, 13, -6),
                                    new THREE.Vector3(-26, 13, -8),
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-35, 13, -20),
                                ],
                                duration: 30000,
                                panoramaImage: '/assets/panoramas/criminologyDeanOffice.jpg'
                            }
                        }
                    }
                }
            },
            toNewGradeSchoolBuilding: {
                name: "New Grade School Building",
                floors: {
                    first: {
                        name: "Ground Floor",
                        rooms: {
                            main: {
                                name: "Main Building",
                                points: [
                                    new THREE.Vector3(-30, 13, -21),
                                    new THREE.Vector3(-14, 13, -23),
                                    new THREE.Vector3(-5, 13, -21)
                                ],
                                duration: 30000
                            }
                        }
                    }
                }           
            }
        }
    }
};

/**
 * Get all paths from a specific starting location
 * @param {string} startLocationId - ID of the starting location
 * @return {Object|null} Path object containing all paths from the starting location, null if not found
 */
function getPathsFromLocation(startLocationId) {
    return paths[startLocationId] || null;
}

/**
 * Get a specific path between two locations
 * @param {string} startLocationId - ID of the starting location
 * @param {string} pathId - ID of the path/destination
 * @return {Object|null} Path object if found, null otherwise
 */
function getSpecificPath(startLocationId, pathId) {
    if (!paths[startLocationId] || !paths[startLocationId].paths[pathId]) {
        return null;
    }
    
    return paths[startLocationId].paths[pathId];
}

/**
 * Get all starting points available for navigation
 * @return {Array} Array of starting point IDs
 */
function getAllStartingPoints() {
    return Object.keys(paths);
}

/**
 * Get destination options from a starting point
 * @param {string} startLocationId - ID of the starting location
 * @return {Array} Array of destination objects with id and name
 */
function getDestinations(startLocationId) {
    if (!paths[startLocationId]) {
        return [];
    }
    
    return Object.entries(paths[startLocationId].paths).map(([id, path]) => ({
        id,
        name: path.name
    }));
}

/**
 * Get floors available for a specific path
 * @param {string} startLocationId - ID of the starting location
 * @param {string} pathId - ID of the path/destination
 * @return {Array} Array of floor objects with id and name
 */
function getFloorsForPath(startLocationId, pathId) {
    if (!paths[startLocationId] || !paths[startLocationId].paths[pathId]) {
        return [];
    }
    
    return Object.entries(paths[startLocationId].paths[pathId].floors).map(([id, floor]) => ({
        id,
        name: floor.name
    }));
}

/**
 * Get rooms available on a specific floor for a path
 * @param {string} startLocationId - ID of the starting location
 * @param {string} pathId - ID of the path/destination
 * @param {string} floorId - ID of the floor
 * @return {Array} Array of room objects with id and name
 */
function getRoomsForFloor(startLocationId, pathId, floorId) {
    if (!paths[startLocationId] || 
        !paths[startLocationId].paths[pathId] || 
        !paths[startLocationId].paths[pathId].floors[floorId]) {
        return [];
    }
    
    return Object.entries(paths[startLocationId].paths[pathId].floors[floorId].rooms).map(([id, room]) => ({
        id,
        name: room.name
    }));
}

/**
 * Get navigation points for a specific room
 * @param {string} startLocationId - ID of the starting location
 * @param {string} pathId - ID of the path/destination
 * @param {string} floorId - ID of the floor
 * @param {string} roomId - ID of the room
 * @return {Object|null} Room object with navigation points if found, null otherwise
 */
function getNavigationPoints(startLocationId, pathId, floorId, roomId) {
    if (!paths[startLocationId] || 
        !paths[startLocationId].paths[pathId] || 
        !paths[startLocationId].paths[pathId].floors[floorId] ||
        !paths[startLocationId].paths[pathId].floors[floorId].rooms[roomId]) {
        return null;
    }
    
    return paths[startLocationId].paths[pathId].floors[floorId].rooms[roomId];
}

// Export the data and functions for use in other modules
if (typeof window !== 'undefined') {
    // Browser environment
    window.pathsData = {
        paths,
        getPathsFromLocation,
        getSpecificPath,
        getAllStartingPoints,
        getDestinations,
        getFloorsForPath,
        getRoomsForFloor,
        getNavigationPoints
    };
}

// For CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        paths,
        getPathsFromLocation,
        getSpecificPath,
        getAllStartingPoints,
        getDestinations,
        getFloorsForPath,
        getRoomsForFloor,
        getNavigationPoints
    };
}