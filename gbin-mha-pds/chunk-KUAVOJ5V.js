import{a as C}from"./chunk-XXRJ3JEE.js";import{Eb as o,Fb as n,Gb as e,Hb as d,Sb as E,Ub as m,Xa as a,dc as p,gb as f,gc as t,qa as S,yb as c,zb as _}from"./chunk-45QFY5M4.js";import"./chunk-7RJXRMKA.js";function h(r,l){if(r&1&&(n(0,"section",5)(1,"h2"),t(2,"Database Tables Overview"),e(),n(3,"div",6)(4,"div",7)(5,"h3"),t(6,"CUST_GBIN_MHA_PDS_EPISODE"),e(),n(7,"p"),t(8,"Episode of care information (DE05, DE06, DE09) - Referral, episode status, health program"),e()(),n(9,"div",7)(10,"h3"),t(11,"CUST_GBIN_MHA_PDS_SERVICE"),e(),n(12,"p"),t(13,"Health service events (DE07, DE08, DE10) - Organization, site, service modality"),e()(),n(14,"div",7)(15,"h3"),t(16,"CUST_GBIN_MHA_PDS_APPOINTMENT"),e(),n(17,"p"),t(18,"Scheduled appointments (DE06.006, DE06.007) - Appointment tracking and cancellations"),e()(),n(19,"div",7)(20,"h3"),t(21,"CUST_GBIN_MHA_PDS_CLIENT"),e(),n(22,"p"),t(23,"Client data snapshots (DE01-DE04) - Demographics, identifiers, address, SDOH"),e()(),n(24,"div",7)(25,"h3"),t(26,"CUST_GBIN_MHA_PDS_LOG"),e(),n(27,"p"),t(28,"Activity logging - Error tracking, JSON payload storage, hierarchical logs"),e()()()(),n(29,"section",8)(30,"h2"),t(31,"Entity Relationship Diagram"),e(),d(32,"app-mermaid-diagram",9),e(),n(33,"section",10)(34,"h2"),t(35,"Key Relationships"),e(),n(36,"table",11)(37,"thead")(38,"tr")(39,"th"),t(40,"Relationship"),e(),n(41,"th"),t(42,"Cardinality"),e(),n(43,"th"),t(44,"Description"),e()()(),n(45,"tbody")(46,"tr")(47,"td"),t(48,"PERSON -> EPISODE"),e(),n(49,"td"),t(50,"One-to-Many"),e(),n(51,"td"),t(52,"A patient can have multiple mental health episodes"),e()(),n(53,"tr")(54,"td"),t(55,"ENCOUNTER -> EPISODE"),e(),n(56,"td"),t(57,"One-to-One"),e(),n(58,"td"),t(59,"Each episode typically links to an initial encounter"),e()(),n(60,"tr")(61,"td"),t(62,"EPISODE -> CLIENT"),e(),n(63,"td"),t(64,"One-to-One"),e(),n(65,"td"),t(66,"Each episode has one client data snapshot (DE01-DE04)"),e()(),n(67,"tr")(68,"td"),t(69,"EPISODE -> SERVICE"),e(),n(70,"td"),t(71,"One-to-Many"),e(),n(72,"td"),t(73,"An episode contains multiple service events"),e()(),n(74,"tr")(75,"td"),t(76,"EPISODE -> APPOINTMENT"),e(),n(77,"td"),t(78,"One-to-Many"),e(),n(79,"td"),t(80,"An episode can have multiple scheduled appointments"),e()(),n(81,"tr")(82,"td"),t(83,"LOG -> LONG_TEXT"),e(),n(84,"td"),t(85,"One-to-One"),e(),n(86,"td"),t(87,"Full JSON request storage for debugging"),e()(),n(88,"tr")(89,"td"),t(90,"SERVICE -> ENCOUNTER"),e(),n(91,"td"),t(92,"One-to-One"),e(),n(93,"td"),t(94,"Each service links to a specific encounter"),e()(),n(95,"tr")(96,"td"),t(97,"APPOINTMENT -> SCH_EVENT"),e(),n(98,"td"),t(99,"One-to-One"),e(),n(100,"td"),t(101,"Each appointment links to a Cerner scheduled event"),e()(),n(102,"tr")(103,"td"),t(104,"ALL TABLES -> LOG"),e(),n(105,"td"),t(106,"One-to-Many"),e(),n(107,"td"),t(108,"Activity tracking for all MHA PDS tables"),e()(),n(109,"tr")(110,"td"),t(111,"LOG -> LOG"),e(),n(112,"td"),t(113,"Self-referential"),e(),n(114,"td"),t(115,"Hierarchical logging via parent_log_id"),e()()()()()),r&2){let i=m();a(32),o("definition",i.erdDiagram)}}function P(r,l){if(r&1&&(n(0,"section",5)(1,"h2"),t(2,"Mirth Connect Integration Overview"),e(),n(3,"p",12),t(4," The MHA PDS system uses Mirth Connect as an integration engine to transform Cerner JSON data into FHIR R4 bundles and submit them to Ontario Health. The process consists of three channels that work in sequence, with callback destinations that POST responses back to Cerner for status tracking. "),e(),n(5,"div",13)(6,"div",14)(7,"div",15),t(8,"01"),e(),n(9,"div",16)(10,"h3"),t(11,"MHA PDS Data Poller"),e(),n(12,"p"),t(13,"Polls Cerner API via HTTP GET to retrieve pending MHA PDS episodes. Converts response to NDJSON format for batch processing."),e(),n(14,"div",17)(15,"span",18),t(16,"Source: Polling"),e(),n(17,"span",19),t(18,"Dest: Channel Writer"),e()()()(),n(19,"div",14)(20,"div",15),t(21,"02"),e(),n(22,"div",16)(23,"h3"),t(24,"FHIR Transformation"),e(),n(25,"p"),t(26,"Transforms Cerner JSON into FHIR R4 resources. Creates bundles based on SUBMIT_BUNDLE configuration. Validates data against MHA PDS profiles. Posts error responses back to Cerner API on transformation failure."),e(),n(27,"div",17)(28,"span",18),t(29,"Source: Channel Reader"),e(),n(30,"span",19),t(31,"Dest 1: Channel Writer"),e(),n(32,"span",19),t(33,"Dest 2: Cerner Callback"),e()()()(),n(34,"div",14)(35,"div",15),t(36,"03"),e(),n(37,"div",16)(38,"h3"),t(39,"Ontario Health Submission"),e(),n(40,"p"),t(41,"Authenticates via OAuth2 with OneID Federation. POSTs FHIR bundles to OH Provider API. Posts OH response back to Cerner API for status tracking and error logging."),e(),n(42,"div",17)(43,"span",18),t(44,"Source: Channel Reader"),e(),n(45,"span",19),t(46,"Dest 1: Get Token"),e(),n(47,"span",19),t(48,"Dest 2: HTTPS POST"),e(),n(49,"span",19),t(50,"Dest 3: Cerner Callback"),e()()()()()(),n(51,"section",8)(52,"h2"),t(53,"System Overview Diagram"),e(),d(54,"app-mermaid-diagram",20),e(),n(55,"section",8)(56,"h2"),t(57,"Channel 01: Data Poller Script Logic"),e(),n(58,"p",12),t(59," The Data Poller channel triggers daily at 2:00 AM, retrieves MHA PDS data from Cerner, and converts it to NDJSON format for patient-by-patient processing. "),e(),d(60,"app-mermaid-diagram",21),e(),n(61,"section",8)(62,"h2"),t(63,"Channel 02: FHIR Transformation Script Logic"),e(),n(64,"p",12),t(65," The FHIR Transformation channel processes each patient record, creates FHIR profiles using a code template library, and assembles bundles based on the SUBMIT_BUNDLE array. "),e(),d(66,"app-mermaid-diagram",22),e(),n(67,"section",8)(68,"h2"),t(69,"Channel 02: Code Template Hierarchy"),e(),n(70,"p",12),t(71," The FHIR transformation uses a library of code templates that create and cache FHIR profiles, then assemble them into bundles with proper cross-references. "),e(),d(72,"app-mermaid-diagram",23),e(),n(73,"section",8)(74,"h2"),t(75,"Channel 03: OAuth2 Authentication Flow"),e(),n(76,"p",12),t(77," Ontario Health requires OAuth2 authentication using a signed JWT client assertion. The token is cached and reused until 2 minutes before expiry. "),e(),d(78,"app-mermaid-diagram",24),e(),n(79,"section",25)(80,"h2"),t(81,"FHIR Resource Profiles"),e(),n(82,"p",12),t(83," The FHIR Transformation channel creates these MHA PDS-compliant FHIR R4 resources: "),e(),n(84,"div",26)(85,"div",27)(86,"h4"),t(87,"Core Resources"),e(),n(88,"ul",28)(89,"li")(90,"code"),t(91,"Patient"),e(),t(92," - DE01-DE04 client demographics"),e(),n(93,"li")(94,"code"),t(95,"Organization"),e(),t(96," - DE07 HSP organization"),e(),n(97,"li")(98,"code"),t(99,"Location"),e(),t(100," - DE08 HSP site"),e()()(),n(101,"div",27)(102,"h4"),t(103,"Episode Resources"),e(),n(104,"ul",28)(105,"li")(106,"code"),t(107,"ServiceRequest"),e(),t(108," - DE05 referral info"),e(),n(109,"li")(110,"code"),t(111,"EpisodeOfCare"),e(),t(112," - DE06 episode tracking"),e(),n(113,"li")(114,"code"),t(115,"HealthcareService"),e(),t(116," - DE09 health program"),e()()(),n(117,"div",27)(118,"h4"),t(119,"Service Resources"),e(),n(120,"ul",28)(121,"li")(122,"code"),t(123,"Encounter"),e(),t(124," - DE10 health service events"),e(),n(125,"li")(126,"code"),t(127,"Appointment"),e(),t(128," - DE06.006-007 (cancelled only)"),e(),n(129,"li")(130,"code"),t(131,"Condition"),e(),t(132," - Mental health condition"),e()()(),n(133,"div",27)(134,"h4"),t(135,"SDOH Observations (DE04)"),e(),n(136,"ul",28)(137,"li")(138,"code"),t(139,"Observation-GenderIdentity"),e()(),n(140,"li")(141,"code"),t(142,"Observation-SexualOrientation"),e()(),n(143,"li")(144,"code"),t(145,"Observation-CitizenshipStatus"),e()(),n(146,"li")(147,"code"),t(148,"Observation-LevelOfEducation"),e()(),n(149,"li")(150,"code"),t(151,"Observation-EmploymentStatus"),e()(),n(152,"li")(153,"code"),t(154,"Observation-PersonalIncomeSource"),e()(),n(155,"li")(156,"code"),t(157,"Observation-HousingStatus"),e()(),n(158,"li")(159,"code"),t(160,"Observation-TotalHouseholdIncome"),e()(),n(161,"li")(162,"code"),t(163,"Observation-NumberOfPeopleIncomeSupports"),e()(),n(164,"li")(165,"code"),t(166,"Observation-LegalStatus"),e()()()()()(),n(167,"section",29)(168,"h2"),t(169,"Bundle Types"),e(),n(170,"p",12),t(171," Each patient episode can generate one or more FHIR bundles based on the SUBMIT_BUNDLE array. Bundles are determined by data availability and episode state. "),e(),n(172,"table",30)(173,"thead")(174,"tr")(175,"th"),t(176,"Bundle Type"),e(),n(177,"th"),t(178,"Contains"),e(),n(179,"th"),t(180,"When Used"),e()()(),n(181,"tbody")(182,"tr")(183,"td")(184,"code"),t(185,"SERVICE_REQUEST_EOC"),e()(),n(186,"td"),t(187,"Patient, Organization, Location, ServiceRequest, EpisodeOfCare, HealthcareService"),e(),n(188,"td"),t(189,"New episode with referral and program enrollment"),e()(),n(190,"tr")(191,"td")(192,"code"),t(193,"CLIENT_SDOH"),e()(),n(194,"td"),t(195,"Patient, Organization, Location, Condition, 10\xD7 Observation profiles"),e(),n(196,"td"),t(197,"Episode has socio-demographic data (DE04)"),e()(),n(198,"tr")(199,"td")(200,"code"),t(201,"HEALTH_SERVICES"),e()(),n(202,"td"),t(203,"Patient, Organization, Location, ServiceRequest, EpisodeOfCare, Encounter, HealthcareService"),e(),n(204,"td"),t(205,"Episode has service events (DE10)"),e()(),n(206,"tr")(207,"td")(208,"code"),t(209,"SCHEDULED_APPOINTMENT"),e()(),n(210,"td"),t(211,"Patient, Organization, Location, EpisodeOfCare, Appointment"),e(),n(212,"td"),t(213,"First appointment was missed/cancelled only"),e()()()()(),n(214,"section",31)(215,"h2"),t(216,"Integration Endpoints"),e(),n(217,"table",32)(218,"thead")(219,"tr")(220,"th"),t(221,"Endpoint"),e(),n(222,"th"),t(223,"URL"),e(),n(224,"th"),t(225,"Method"),e()()(),n(226,"tbody")(227,"tr")(228,"td"),t(229,"Cerner MHA PDS Data API"),e(),n(230,"td")(231,"code"),t(232,"m1958.gbrh_cd.cerncd.com/mpages/reports/gbin_mha_pds_data"),e()(),n(233,"td"),t(234,"GET"),e()(),n(235,"tr")(236,"td"),t(237,"OneID OAuth Token"),e(),n(238,"td")(239,"code"),t(240,"login.pst.oneidfederation.ehealthontario.ca/oidc/access_token"),e()(),n(241,"td"),t(242,"POST"),e()(),n(243,"tr")(244,"td"),t(245,"Ontario Health FHIR API"),e(),n(246,"td")(247,"code"),t(248,"provider.pst.ehealthontario.ca/api2/fhir/mha/Bundle"),e()(),n(249,"td"),t(250,"POST"),e()()()()()),r&2){let i=m();a(54),o("definition",i.mirthFlowDiagram),a(6),o("definition",i.channel01Diagram),a(6),o("definition",i.channel02Diagram),a(6),o("definition",i.codeTemplateHierarchy),a(6),o("definition",i.channel03Diagram)}}var O=class r{activeTab=S("database");erdDiagram=`erDiagram
    %% ============================================
    %% MHA PDS Tables Entity Relationship Diagram
    %% ============================================

    %% Cerner Standard Tables (External References)
    PERSON {
        f8 person_id PK
        vc name_full_formatted
        dq8 birth_dt_tm
    }

    ENCOUNTER {
        f8 encntr_id PK
        f8 person_id FK
        dq8 reg_dt_tm
        dq8 disch_dt_tm
    }

    LONG_TEXT {
        f8 long_text_id PK
        vc long_text
    }

    SCH_EVENT {
        f8 sch_event_id PK
        f8 person_id FK
    }

    SCH_APPT {
        f8 sch_appt_id PK
        f8 sch_event_id FK
    }

    %% MHA PDS Custom Tables

    CUST_GBIN_MHA_PDS_EPISODE {
        f8 mha_pds_episode_id PK "Primary Key"
        f8 person_id FK "Link to PERSON"
        f8 encntr_id FK "Link to ENCOUNTER"
        vc episode_identifier UK "Unique Episode ID"
        vc referral_id "DE05.001"
        dq8 referral_received_dt_tm "DE05.002"
        vc referral_source "DE05.003"
        f8 referral_source_type_cd "DE05.004"
        vc referral_source_type_mapped "DE05.004 Mapped"
        f8 referral_type_cd "DE05.005"
        vc referral_type_mapped "DE05.005 Mapped"
        f8 episode_of_care_status_cd "DE06.002"
        vc episode_of_care_status_mapped "DE06.002 Mapped"
        dq8 first_contact_dt_tm "DE06.003"
        dq8 eligibility_screening_dt_tm "DE06.004"
        dq8 initial_assessment_dt_tm "DE06.005"
        dq8 scheduled_appointment_dt_tm "DE06.006"
        f8 appt_reschedule_reason_cd "DE06.007"
        vc appt_reschedule_reason_mapped "DE06.007 Mapped"
        dq8 service_initiation_dt_tm "DE06.008"
        dq8 service_enrollment_dt_tm "DE06.009"
        dq8 service_termination_dt_tm "DE06.010"
        f8 service_termination_reason_cd "DE06.011"
        vc service_termination_reason "DE06.011 Display"
        vc program_number "DE09.001"
        vc program_name "DE09.002"
        f8 functional_centre_cd "DE09.003"
        vc functional_centre_mapped "Mapped FC Code"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        f8 active_status_cd "Audit"
        dq8 active_status_dt_tm "Audit"
        f8 active_status_prsnl_id "Audit"
        dq8 beg_effective_dt_tm "Audit"
        dq8 end_effective_dt_tm "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_SERVICE {
        f8 mha_pds_service_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE"
        f8 encntr_id FK "Link to ENCOUNTER"
        f8 person_id FK "Link to PERSON (denorm)"
        vc hsp_organization_number "DE07.001"
        vc moh_organization_id "DE07.002"
        vc hsp_organization_name "DE07.003"
        i2 hsp_organization_active_ind "DE07.004"
        f8 loc_facility_cd "Facility Code"
        vc hsp_site_number "DE08.001"
        vc hsp_site_name "DE08.002"
        vc service_event_id UK "DE10.001"
        f8 service_modality_cd "DE10.002"
        vc service_modality_mapped "DE10.002 Mapped"
        f8 service_modality_type_cd "DE10.003"
        vc service_modality_type_mapped "DE10.003 Mapped"
        dq8 service_event_dt_tm "DE10.004"
        vc group_service_id "DE10.005"
        i4 direct_service_minutes "DE10.006"
        i4 indirect_service_minutes "DE10.007"
        f8 encounter_status_cd "DE10.008"
        vc encounter_status_mapped "DE10.008 Mapped"
        f8 service_provider_id "Provider ID"
        vc service_provider_name "Provider Name"
        f8 service_provider_role_cd "Provider Role"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_APPOINTMENT {
        f8 mha_pds_appointment_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE"
        f8 encntr_id FK "Link to ENCOUNTER"
        f8 person_id FK "Link to PERSON (denorm)"
        f8 sch_event_id FK "Link to SCH_EVENT"
        f8 sch_appt_id FK "Link to SCH_APPT"
        dq8 appointment_start_dt_tm "DE06.006 Start"
        dq8 appointment_end_dt_tm "DE06.006 End"
        i4 duration_minutes "DE06.006 Duration"
        f8 appointment_status_cd "Status Code"
        vc appointment_status_mapped "FHIR Status"
        f8 appointment_type_cd "Type Code"
        vc appointment_type_display "Type Display"
        f8 appointment_location_cd "Location Code"
        vc appointment_location_display "Location Display"
        f8 cancellation_reason_cd "DE06.007 Code"
        vc cancellation_reason_mapped "DE06.007 Mapped"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_CLIENT {
        f8 mha_pds_client_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE (1:1)"
        f8 person_id FK "Link to PERSON"
        dq8 extracted_dt_tm "When extracted"
        vc extraction_source "Script that extracted"
        vc first_name "DE01.001"
        vc middle_name "DE01.002"
        vc last_name "DE01.003"
        dq8 date_of_birth "DE01.004"
        vc date_of_birth_text "DE01.004 Display"
        f8 estimated_dob_flag_cd "DE01.005 Code"
        vc estimated_dob_flag "DE01.005"
        vc client_active_flag "Active Flag"
        vc client_identifier_mrn "DE02.001"
        vc vendor_issuing_id "DE02.002"
        vc health_card_number "DE02.003"
        f8 identifier_type_cd "DE02.004 Code"
        vc identifier_type "DE02.004"
        f8 hcn_issuing_auth_cd "DE02.005 Code"
        vc hcn_issuing_authority "DE02.005"
        f8 address_use_cd "DE03.001 Code"
        vc address_use "DE03.001"
        vc city "DE03.002"
        f8 province_cd "DE03.003 Code"
        vc province "DE03.003"
        vc postal_code "DE03.004"
        dq8 sdoh_effective_date "DE04.001 Effective Date"
        f8 ethnicity_cd "DE04.002 Code"
        vc ethnicity "DE04.002 Ethnicity"
        f8 religion_cd "DE04.003 Code"
        vc religion "DE04.003 Religion"
        f8 first_language_cd "DE04.004 Code"
        vc first_language "DE04.004 Mother Tongue"
        f8 service_language_cd "DE04.005 Code"
        vc service_language "DE04.005 Service Language"
        f8 official_language_cd "DE04.006 Code"
        vc official_language "DE04.006 Official Language"
        f8 gender_identity_cd "DE04.007 Code"
        vc gender_identity "DE04.007"
        f8 sexual_orientation_cd "DE04.008 Code"
        vc sexual_orientation "DE04.008"
        vc year_arrived_canada "DE04.009"
        f8 born_in_canada_cd "DE04.010 Code"
        vc born_in_canada "DE04.010"
        f8 citizenship_status_cd "DE04.012 Code"
        vc citizenship_status "DE04.012"
        f8 education_level_cd "DE04.013 Code"
        vc education_level "DE04.013"
        f8 employment_status_cd "DE04.014 Code"
        vc employment_status "DE04.014"
        f8 income_source_cd "DE04.015 Code"
        vc income_source "DE04.015"
        f8 marital_status_cd "DE04.016 Code"
        vc marital_status "DE04.016 Marital Status"
        f8 housing_status_cd "DE04.017 Code"
        vc housing_status "DE04.017"
        f8 household_income_cd "DE04.018 Code"
        vc household_income "DE04.018"
        i4 household_members "DE04.019"
        f8 legal_status_cd "DE04.020 Code"
        vc legal_status "DE04.020"
        f8 pre_existing_cond_cd "DE04.021 Code"
        vc pre_existing_condition "DE04.021 Pre-Existing"
        i2 sdoh_complete_ind "Completeness Flag"
        vc sdoh_missing_fields "Missing Fields"
        i2 data_modified_ind "Correction Flag"
        vc data_modified_reason "Correction Reason"
        dq8 data_modified_dt_tm "Correction Date"
        f8 data_modified_prsnl_id "Corrected By"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_LOG {
        f8 mha_pds_log_id PK "Primary Key"
        vc log_type "MANAGER-DATA_EXTRACTION-TRANSMISSION"
        vc title "Brief Description"
        vc summary "255 char summary"
        vc related_script "Script Name"
        vc function_name "Function Name"
        dq8 start_dt_tm "Start Time"
        dq8 stop_dt_tm "Stop Time"
        vc status "IN_PROGRESS-SUCCESS-FAILED-ERROR-PARTIAL"
        f8 person_id FK "Optional Person Link"
        f8 encntr_id FK "Optional Encounter Link"
        f8 episode_id FK "Optional Episode Link"
        f8 service_id FK "Optional Service Link"
        vc batch_id "Batch Identifier"
        f8 long_text_id FK "JSON Request Storage"
        i4 record_cnt "Records Processed"
        i4 error_cnt "Error Count"
        vc error_message "Error Details"
        f8 parent_log_id FK "Hierarchical Logging"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    %% Relationships
    PERSON ||--o{ CUST_GBIN_MHA_PDS_EPISODE : "has episodes"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_EPISODE : "has episodes"

    CUST_GBIN_MHA_PDS_EPISODE ||--|| CUST_GBIN_MHA_PDS_CLIENT : "has client data (1:1)"
    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "contains services"
    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments"

    PERSON ||--o{ CUST_GBIN_MHA_PDS_CLIENT : "has client snapshots"
    PERSON ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "has services (denorm)"
    PERSON ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments (denorm)"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "has services"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments"

    SCH_EVENT ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "scheduled events"
    SCH_APPT ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "appointments"

    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_SERVICE ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_CLIENT ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_APPOINTMENT ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"

    CUST_GBIN_MHA_PDS_LOG ||--o| LONG_TEXT : "stores JSON"
    CUST_GBIN_MHA_PDS_LOG ||--o{ CUST_GBIN_MHA_PDS_LOG : "parent hierarchy"`;mirthFlowDiagram=`flowchart TB
    subgraph CERNER["Cerner Millennium"]
        CCL["gbin_mha_pds_data.prg"]
        DB[(MHA PDS Tables)]
        DB --> CCL
    end

    subgraph CH1["Channel 01: MHA PDS Data Poller"]
        POLL[/"Polling Trigger (Daily)"/]
        GET["HTTP GET<br/>Cerner MPage API"]
        NDJSON["Convert to NDJSON<br/>(per patient)"]
        POLL --> GET
        GET --> NDJSON
    end

    subgraph CH2["Channel 02: FHIR Transformation"]
        READ1[/"Channel Reader<br/>(per patient)"/]
        VALIDATE["Validate Fields<br/>(submitFieldsContains)"]
        BUNDLE["Determine Bundles<br/>(SUBMIT_BUNDLE array)"]

        subgraph PROFILES["Create FHIR Profiles"]
            PAT["Patient"]
            ORG["Organization"]
            LOC["Location"]
            SR["ServiceRequest"]
            EOC["EpisodeOfCare"]
            HS["HealthcareService"]
            ENC["Encounter"]
            APPT["Appointment"]
            COND["Condition"]
            OBS["10x Observations<br/>(SDOH)"]
        end

        ASSEMBLE["Assemble Bundle<br/>(add references)"]
        NDJSON2["Output NDJSON<br/>(per bundle)"]
        CB2["POST Error Response<br/>to Cerner API"]

        READ1 --> VALIDATE
        VALIDATE --> BUNDLE
        BUNDLE --> PROFILES
        PROFILES --> ASSEMBLE
        ASSEMBLE --> NDJSON2
        VALIDATE -.->|On Error| CB2
    end

    subgraph CH3["Channel 03: Ontario Health Submission"]
        READ2[/"Channel Reader<br/>(per bundle)"/]
        AUTH["OAuth2 Token<br/>(OneID Federation)"]
        POST["POST FHIR Bundle<br/>OH Provider API"]
        RESP["Handle Response"]
        LOG["Log Result"]
        CB3["POST Response<br/>to Cerner API"]

        READ2 --> AUTH
        AUTH --> POST
        POST --> RESP
        RESP --> LOG
        RESP --> CB3
    end

    subgraph OH["Ontario Health"]
        FHIR[("MHA PDS<br/>FHIR Repository")]
    end

    CCL --> GET
    NDJSON --> READ1
    NDJSON2 --> READ2
    POST --> FHIR
    CB2 -.->|Error Callback| CCL
    CB3 -.->|Response Callback| CCL

    classDef cerner fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef channel fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef oh fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef profiles fill:#faf5ff,stroke:#7c3aed,stroke-width:1px
    classDef callback fill:#fee2e2,stroke:#dc2626,stroke-width:1px

    class CERNER cerner
    class CH1,CH2,CH3 channel
    class OH oh
    class PROFILES profiles
    class CB2,CB3 callback`;channel01Diagram=`flowchart TB
    subgraph SOURCE["Source Connector"]
        POLL[/"Polling Trigger<br/>(Daily @ 2:00 AM)"/]
        SRC_JS["JavaScript Reader<br/>return 'Processing'"]
        POLL --> SRC_JS
    end

    subgraph DEST1["Destination 1: Get Data from Cerner API"]
        HTTP_GET["HTTP GET<br/>gbin_mha_pds_data"]
        RESP_CHECK{{"Status<br/>= 200?"}}
        STORE_JSON["Store Response<br/>$c('cernerJson', response)"]
        THROW_ERR["Throw Error<br/>'Failed to retrieve JSON'"]

        HTTP_GET --> RESP_CHECK
        RESP_CHECK -->|Yes| STORE_JSON
        RESP_CHECK -->|No| THROW_ERR
    end

    subgraph DEST2["Destination 2: Split JSON and Send to Channel 02"]
        FILTER{{"cernerJson<br/>exists?"}}
        PARSE_JSON["Parse JSON<br/>JSON.parse($c('cernerJson'))"]
        EXTRACT["Extract QUAL Array<br/>msg.MHA_PDS_SUBMISSION.QUAL"]
        LOOP["Loop Patients<br/>for each patient"]
        NDJSON["Build NDJSON<br/>JSON.stringify(patient) + newline"]
        SEND["Channel Writer<br/>Send to Channel 02"]

        FILTER -->|Yes| PARSE_JSON
        FILTER -->|No| SKIP["Skip Destination"]
        PARSE_JSON --> EXTRACT
        EXTRACT --> LOOP
        LOOP --> NDJSON
        NDJSON --> SEND
    end

    SRC_JS --> HTTP_GET
    STORE_JSON --> FILTER

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef error fill:#fee2e2,stroke:#dc2626,stroke-width:2px

    class SOURCE source
    class DEST1,DEST2 dest
    class RESP_CHECK,FILTER decision
    class THROW_ERR error`;channel02Diagram=`flowchart TB
    subgraph SOURCE["Source Connector: Channel Reader"]
        BATCH[/"NDJSON Batch Processing<br/>(one patient per message)"/]
        PARSE["Parse JSON Patient Record"]
        CREATE_MAPS["Create Maps<br/>(Store SUBMIT_BUNDLE, FIELDS_LIST)"]

        BATCH --> PARSE
        PARSE --> CREATE_MAPS
    end

    subgraph DEST1["Destination 1: Send FHIR Bundle"]
        CALL_LIST["Call createBundleList()"]

        subgraph LOOP["For Each Bundle in SUBMIT_BUNDLE"]
            GET_PROFILES["Get PROFILE Array<br/>from bundle config"]
            CACHE_PROFILES["createAndCacheProfiles()<br/>(create or retrieve from cache)"]
            CREATE_BUNDLE["createBundle()<br/>(assemble with references)"]
            SERIALIZE["JSON.stringify(bundle)"]
            APPEND["Append to NDJSON output"]

            GET_PROFILES --> CACHE_PROFILES
            CACHE_PROFILES --> CREATE_BUNDLE
            CREATE_BUNDLE --> SERIALIZE
            SERIALIZE --> APPEND
        end

        SEND["Channel Writer<br/>Send to Channel 03"]
        FILTER1{{"errorMessage<br/>not exists?"}}

        CALL_LIST --> LOOP
        APPEND --> FILTER1
        FILTER1 -->|Yes| SEND
    end

    subgraph DEST2_ERR["Destination 2: Post Error to Cerner"]
        FILTER2{{"errorMessage<br/>exists?"}}
        BUILD_ERR["Build JSON Response<br/>(status, error, bundle data)"]
        POST_ERR["HTTP POST<br/>Cerner MPage API"]
        LOG_ERR["Log Error Callback"]

        FILTER2 -->|Yes| BUILD_ERR
        BUILD_ERR --> POST_ERR
        POST_ERR --> LOG_ERR
    end

    CREATE_MAPS --> CALL_LIST
    FILTER1 -->|No| FILTER2

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef loop fill:#faf5ff,stroke:#7c3aed,stroke-width:2px
    classDef error fill:#fee2e2,stroke:#dc2626,stroke-width:2px

    class SOURCE source
    class DEST1 dest
    class DEST2_ERR error
    class LOOP loop`;codeTemplateHierarchy=`flowchart TB
    subgraph ENTRY["Entry Point"]
        LIST["createBundleList()<br/>- Loop SUBMIT_BUNDLE array<br/>- Return NDJSON string"]
    end

    subgraph CACHE["Profile Creation & Caching"]
        CACHE_FN["createAndCacheProfiles(profileArr)<br/>- Loop profile array<br/>- Create if not cached<br/>- Uses getProfileCache/putProfileCache"]
    end

    subgraph PROFILES["Profile Creator Functions"]
        PAT["createPatientProfile()<br/>DE01-DE04 Client"]
        ORG["createOrganizationProfile()<br/>DE07 HSP Org"]
        LOC["createLocationProfile()<br/>DE08 HSP Site"]
        SR["createServiceRequestProfile()<br/>DE05 Referral"]
        EOC["createEpisodeOfCareProfile()<br/>DE06 Episode"]
        HS["createHealthcareServiceProfile()<br/>DE09 Program"]
        APPT["createAppointmentProfile()<br/>DE06.006-007"]
        ENC["createEncounterProfile()<br/>DE10 Service Event"]
        COND["createConditionProfile()<br/>DE04.021 Pre-Existing"]
        OBS["createObservationProfile(type)<br/>10 SDOH Observation types"]
    end

    subgraph BUNDLE["Bundle Assembly"]
        BUNDLE_FN["createBundle(profileArr)<br/>- Create Bundle resource<br/>- Loop profiles<br/>- Add cross-references<br/>- Add bundle entries"]
    end

    subgraph HELPERS["Helper Functions"]
        VALIDATE["submitFieldsContains()<br/>Check required fields"]
        ERROR["generateDataValidationError()<br/>Throw validation error"]
        UTIL["getStringValueOrNull()<br/>Safe value extraction"]
    end

    LIST --> CACHE_FN
    CACHE_FN --> PAT & ORG & LOC & SR & EOC & HS & APPT & ENC & COND & OBS
    LIST --> BUNDLE_FN
    BUNDLE_FN --> PROFILES
    PAT & ORG & LOC & SR & EOC & HS & APPT & ENC & COND & OBS --> VALIDATE
    VALIDATE --> ERROR
    VALIDATE --> UTIL

    classDef entry fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef cache fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef profiles fill:#faf5ff,stroke:#7c3aed,stroke-width:1px
    classDef bundle fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef helpers fill:#f3f4f6,stroke:#6b7280,stroke-width:1px

    class ENTRY entry
    class CACHE cache
    class PROFILES profiles
    class BUNDLE bundle
    class HELPERS helpers`;channel03Diagram=`flowchart TB
    subgraph SOURCE["Source Connector: Channel Reader"]
        BATCH[/"NDJSON Batch Processing<br/>(one bundle per message)"/]
        STORE_BUNDLE["Store Bundle JSON<br/>channelMap.put('bundleJson', raw)"]
        BATCH --> STORE_BUNDLE
    end

    subgraph DEST1["Destination 1: Get Access Token"]
        CHECK_TOKEN{{"Token Valid?<br/>(not expired - 2min)"}}
        SKIP_TOKEN["Skip Token Request<br/>(use cached token)"]

        subgraph JWT["Create JWT Client Assertion"]
            LOAD_CONFIG["Load Config<br/>CLIENT_ID, UAO, SCOPE"]
            LOAD_KEY["Load Private Key<br/>(PKCS#8 PEM format)"]
            BUILD_HEADER["Build JWT Header<br/>{alg: 'RS256', typ: 'JWT'}"]
            BUILD_CLAIMS["Build JWT Claims<br/>iss, sub, aud, iat, exp, jti"]
            SIGN_RS256["Sign with RS256<br/>SHA256withRSA"]
            ASSEMBLE_JWT["Assemble JWT<br/>header.payload.signature"]

            LOAD_CONFIG --> LOAD_KEY
            LOAD_KEY --> BUILD_HEADER
            BUILD_HEADER --> BUILD_CLAIMS
            BUILD_CLAIMS --> SIGN_RS256
            SIGN_RS256 --> ASSEMBLE_JWT
        end

        TOKEN_POST["HTTP POST<br/>OneID /oidc/access_token<br/>(client_credentials grant)"]
        TOKEN_CHECK{{"Status<br/>= 200?"}}
        CACHE_TOKEN["Cache Token<br/>globalMap.put('oh_oag_access_token')"]
        TOKEN_ERROR["Throw Error<br/>'Token request failed'"]

        CHECK_TOKEN -->|No| JWT
        CHECK_TOKEN -->|Yes| SKIP_TOKEN
        ASSEMBLE_JWT --> TOKEN_POST
        TOKEN_POST --> TOKEN_CHECK
        TOKEN_CHECK -->|Yes| CACHE_TOKEN
        TOKEN_CHECK -->|No| TOKEN_ERROR
    end

    subgraph DEST2["Destination 2: Submit FHIR Bundle"]
        GET_TOKEN["Get Cached Token<br/>globalMap.get('oh_oag_access_token')"]
        FHIR_POST["HTTP POST<br/>OH /api2/fhir/mha/Bundle<br/>Authorization: Bearer token"]
        RESP_CHECK{{"Status<br/>= 200/201?"}}
        LOG_SUCCESS["Log Success<br/>Bundle accepted"]
        LOG_ERROR["Log Error<br/>OperationOutcome details"]

        GET_TOKEN --> FHIR_POST
        FHIR_POST --> RESP_CHECK
        RESP_CHECK -->|Yes| LOG_SUCCESS
        RESP_CHECK -->|No| LOG_ERROR
    end

    subgraph DEST3["Destination 3: POST Response to Cerner"]
        BUILD_RESP["Build JSON Response<br/>(status, OH response,<br/>submitted bundle data)"]
        CERNER_POST["HTTP POST<br/>Cerner MPage API<br/>(processLoggingRequest)"]
        LOG_CB["Log Callback Result"]

        BUILD_RESP --> CERNER_POST
        CERNER_POST --> LOG_CB
    end

    STORE_BUNDLE --> CHECK_TOKEN
    CACHE_TOKEN --> GET_TOKEN
    SKIP_TOKEN --> GET_TOKEN
    LOG_SUCCESS --> BUILD_RESP
    LOG_ERROR --> BUILD_RESP

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef jwt fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef decision fill:#f3f4f6,stroke:#6b7280,stroke-width:2px
    classDef error fill:#fee2e2,stroke:#dc2626,stroke-width:2px
    classDef callback fill:#dbeafe,stroke:#2563eb,stroke-width:2px

    class SOURCE source
    class DEST1,DEST2 dest
    class DEST3 callback
    class JWT jwt
    class CHECK_TOKEN,TOKEN_CHECK,RESP_CHECK decision
    class TOKEN_ERROR,LOG_ERROR error`;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-reference"]],decls:13,vars:6,consts:[[1,"reference-container"],[1,"reference-header"],[1,"subtitle"],[1,"tab-navigation"],[1,"tab-button",3,"click"],[1,"diagram-section"],[1,"table-summary"],[1,"table-card"],[1,"erd-section"],["diagramId","mha-pds-erd",3,"definition"],[1,"relationships-section"],[1,"relationships-table"],[1,"section-intro"],[1,"channel-summary"],[1,"channel-card"],[1,"channel-number"],[1,"channel-content"],[1,"channel-tags"],[1,"tag","source"],[1,"tag","dest"],["diagramId","mirth-flow",3,"definition"],["diagramId","channel-01",3,"definition"],["diagramId","channel-02",3,"definition"],["diagramId","code-templates",3,"definition"],["diagramId","channel-03",3,"definition"],[1,"fhir-section"],[1,"profiles-grid"],[1,"profile-group"],[1,"profile-list"],[1,"bundles-section"],[1,"bundles-table"],[1,"endpoints-section"],[1,"endpoints-table"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"header",1)(2,"h1"),t(3,"MHA PDS Technical Reference"),e(),n(4,"p",2),t(5,"System architecture, data flow, and integration documentation"),e()(),n(6,"nav",3)(7,"button",4),E("click",function(){return s.activeTab.set("database")}),t(8," Database ERD "),e(),n(9,"button",4),E("click",function(){return s.activeTab.set("mirth")}),t(10," Mirth Process Flow "),e()(),c(11,h,116,1),c(12,P,251,5),e()),i&2&&(a(7),p("active",s.activeTab()==="database"),a(2),p("active",s.activeTab()==="mirth"),a(2),_(s.activeTab()==="database"?11:-1),a(),_(s.activeTab()==="mirth"?12:-1))},dependencies:[C],styles:[".reference-container[_ngcontent-%COMP%]{padding:24px;max-width:1400px;margin:0 auto}.reference-header[_ngcontent-%COMP%]{margin-bottom:24px}.reference-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;font-weight:600;color:#1a365d;margin:0 0 8px}.subtitle[_ngcontent-%COMP%]{color:#6c757d;font-size:16px;margin:0}.section-intro[_ngcontent-%COMP%]{color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px}.tab-navigation[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:24px;border-bottom:2px solid #e2e8f0;padding-bottom:0}.tab-button[_ngcontent-%COMP%]{padding:12px 24px;font-size:15px;font-weight:500;color:#4a5568;background:none;border:none;border-bottom:3px solid transparent;margin-bottom:-2px;cursor:pointer;transition:all .2s ease}.tab-button[_ngcontent-%COMP%]:hover{color:#1a365d;background:#f7fafc}.tab-button.active[_ngcontent-%COMP%]{color:#2b6cb0;border-bottom-color:#2b6cb0}section[_ngcontent-%COMP%]{margin-bottom:32px}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#2d3748;margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid #e2e8f0}.table-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.table-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;box-shadow:0 1px 3px #0000001a}.table-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#1a365d;margin:0 0 8px;font-family:Consolas,Monaco,monospace}.table-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#4a5568;margin:0;line-height:1.5}.channel-summary[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.channel-card[_ngcontent-%COMP%]{display:flex;gap:16px;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;box-shadow:0 1px 3px #0000001a}.channel-number[_ngcontent-%COMP%]{flex-shrink:0;width:48px;height:48px;background:linear-gradient(135deg,#2b6cb0,#1a365d);color:#fff;font-size:20px;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:8px}.channel-content[_ngcontent-%COMP%]{flex:1}.channel-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#1a365d;margin:0 0 6px}.channel-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#4a5568;margin:0 0 10px;line-height:1.5}.channel-tags[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.tag[_ngcontent-%COMP%]{font-size:12px;padding:4px 10px;border-radius:4px;font-weight:500}.tag.source[_ngcontent-%COMP%]{background:#ebf8ff;color:#2b6cb0}.tag.dest[_ngcontent-%COMP%]{background:#f0fff4;color:#276749}.erd-section[_ngcontent-%COMP%], .relationships-section[_ngcontent-%COMP%], .fhir-section[_ngcontent-%COMP%], .bundles-section[_ngcontent-%COMP%], .endpoints-section[_ngcontent-%COMP%]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px;box-shadow:0 1px 3px #0000001a}.erd-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .relationships-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fhir-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .bundles-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .endpoints-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.profiles-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.profile-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#2d3748;margin:0 0 10px;padding-bottom:6px;border-bottom:1px solid #e2e8f0}.profile-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.profile-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#4a5568;padding:4px 0}.profile-list[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#edf2f7;color:#2b6cb0;padding:2px 6px;border-radius:3px;font-size:12px}.relationships-table[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:14px}.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 16px;text-align:left;border-bottom:1px solid #e2e8f0}.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f7fafc;font-weight:600;color:#2d3748}.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .bundles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-family:Consolas,Monaco,monospace;font-size:13px;color:#1a365d}.bundles-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#edf2f7;color:#2b6cb0;padding:2px 6px;border-radius:3px;font-size:12px}.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){color:#667eea;font-weight:500}.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], .bundles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], .endpoints-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f7fafc}"],changeDetection:0})};export{O as ReferenceComponent};
