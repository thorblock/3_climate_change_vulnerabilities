--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15
-- Dumped by pg_dump version 12.15

-- Started on 2023-10-03 19:06:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 25243)
-- Name: zipcodes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zipcodes (
    zipcode integer NOT NULL,
    household_income money
);


ALTER TABLE public.zipcodes OWNER TO postgres;

--
-- TOC entry 2825 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN zipcodes.household_income; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.zipcodes.household_income IS 'AMI of zip code (Area median Income)';


--
-- TOC entry 203 (class 1259 OID 25248)
-- Name: rent_amounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rent_amounts (
    "Studio" integer,
    "1" integer,
    "2" integer,
    "3" integer,
    "4" integer,
    "5" integer,
    "6" integer,
    "7" integer
)
INHERITS (public.zipcodes);


ALTER TABLE public.rent_amounts OWNER TO postgres;

--
-- TOC entry 2819 (class 0 OID 25248)
-- Dependencies: 203
-- Data for Name: rent_amounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rent_amounts (zipcode, household_income, "Studio", "1", "2", "3", "4", "5", "6", "7") FROM stdin;
97229	$137,006.00	1350	1645	1778	1983	2380	2737	3148	3620
97210	$79,387.00	1350	1645	1778	1983	2380	2737	3148	3620
97233	$48,360.00	1016	1035	1111	1366	1639	1885	2168	2493
\.


--
-- TOC entry 2818 (class 0 OID 25243)
-- Dependencies: 202
-- Data for Name: zipcodes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.zipcodes (zipcode, household_income) FROM stdin;
97201	$59,811.00
97202	$87,266.00
97203	$71,498.00
97205	$49,708.00
97206	$77,133.00
97209	$72,323.00
97210	$79,387.00
97211	$93,743.00
97212	$115,417.00
97213	$86,005.00
97214	$82,549.00
97215	$91,680.00
97216	$55,590.00
97217	$92,255.00
97218	$73,602.00
97219	$106,242.00
97220	$61,333.00
97221	$124,449.00
97222	$68,366.00
97223	$96,222.00
97224	$83,604.00
97225	$97,661.00
97227	$77,951.00
97229	$137,006.00
97230	$62,982.00
97231	$99,844.00
97232	$67,591.00
97233	$48,360.00
97236	$58,093.00
97239	$96,477.00
97266	$63,274.00
97267	$73,575.00
\.


--
-- TOC entry 2690 (class 2606 OID 25247)
-- Name: zipcodes Zip codes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zipcodes
    ADD CONSTRAINT "Zip codes_pkey" PRIMARY KEY (zipcode);


--
-- TOC entry 2817 (class 6104 OID 33434)
-- Name: rental data; Type: PUBLICATION; Schema: -; Owner: postgres
--

CREATE PUBLICATION "rental data" FOR ALL TABLES WITH (publish = 'insert, update, delete, truncate');


ALTER PUBLICATION "rental data" OWNER TO postgres;

-- Completed on 2023-10-03 19:06:56

--
-- PostgreSQL database dump complete
--

SELECT * from rent_amounts
