-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 02, 2022 at 09:59 AM
-- Server version: 5.7.40
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `susanth3_lib_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` text COLLATE utf8mb4_unicode_ci,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `image`, `author_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Similique sequi ipsum.', 'Sequi amet accusamus quia ipsum. Laudantium quis cumque perferendis impedit voluptate. Quis reprehenderit labore dolore molestiae provident.', 'books/676c9c2e84b385084bcd92dc6c2e5338.png', 3, '2022-01-07 06:20:44', '2022-01-07 06:20:44', NULL),
(2, 'Quasi sunt.', 'Quo laboriosam possimus non ipsam qui aut. Voluptatem saepe ducimus quasi sint rerum pariatur. Unde qui adipisci est impedit molestias aliquam. Eius aspernatur reiciendis voluptatibus ut illo.', 'books/0674ae6885b00bab09c10e74d5b81f1d.png', 14, '2022-01-07 06:20:45', '2022-01-07 06:20:45', NULL),
(3, 'Maiores nemo ullam eligendi.', 'Vel dignissimos dolorem autem dolorum. Consequatur suscipit impedit ut omnis nostrum earum. Est sit eius optio ad non delectus placeat.', 'books/8924b41c2417bd1aec47d40cdaf23680.png', 8, '2022-01-07 06:20:45', '2022-01-07 06:20:45', NULL),
(4, 'Temporibus.', 'Iure aut dolores officiis hic aut est reiciendis sapiente. Et sed in minus quae. Dolor dolor odit occaecati tempore eum ea beatae. Perspiciatis provident pariatur nostrum voluptatibus ut rerum.', 'books/4e03165a3e6f79fa42fc4c5f11a3229e.png', 13, '2022-01-07 06:20:46', '2022-01-07 06:20:46', NULL),
(5, 'Rerum molestiae.', 'Autem autem rerum ut impedit iste qui. Dolor voluptatem consequatur magnam alias aut. Ipsam nam illum ea labore. Id quasi quam soluta magni pariatur consequatur. Est itaque et doloremque consequatur.', 'books/3a2762abb4cd2ff9cdbdcf1302824679.png', 9, '2022-01-07 06:20:47', '2022-01-07 06:20:47', NULL),
(6, 'Eius neque.', 'Sed labore velit soluta fugit et et et. Laudantium veniam odio repellat et. Repellat tempora sit perferendis voluptatem. Voluptatem nostrum ut vel et autem.', 'books/e277c4fe29518401db7c8e1ef4d71349.png', 5, '2022-01-07 06:20:48', '2022-01-07 06:20:48', NULL),
(7, 'Porro omnis animi.', 'Necessitatibus quidem voluptatem voluptatum et veritatis neque. Ad numquam est ullam quam voluptatem.', 'books/b3d774e8cb508bf4a612440df0e58bac.png', 4, '2022-01-07 06:20:49', '2022-01-07 06:20:49', NULL),
(8, 'Optio perspiciatis possimus.', 'Non harum itaque ex eum. Omnis sit suscipit dicta laboriosam sed nam ea nihil. Facere quia iusto et necessitatibus aspernatur eius. Quia ab laboriosam quidem fugit voluptates deleniti.', 'books/c6991c03abf3f90806f872d9b9642abc.png', 8, '2022-01-07 06:20:49', '2022-01-07 06:20:49', NULL),
(9, 'Repudiandae.', 'Enim hic et qui vitae aut velit. Veritatis minus vero eligendi recusandae dolor. Est voluptatem laborum sunt animi. Saepe eaque culpa vitae voluptatibus error aut.', 'books/989813d40b898fb977005f7186ece65a.png', 8, '2022-01-07 06:20:50', '2022-01-07 06:20:50', NULL),
(10, 'Qui et sed.', 'Commodi reprehenderit aperiam sequi distinctio quidem cum adipisci rem. Esse quasi quis iusto accusamus eum. Est alias dignissimos non voluptatem. Expedita saepe qui et nihil.', 'books/234c5ba2e57ce036ac9cbbd60c27df12.png', 12, '2022-01-07 06:20:51', '2022-01-07 06:20:51', NULL),
(11, 'Ut soluta.', 'Optio ipsa autem voluptatum ipsam tenetur iste voluptate labore. Sed ut asperiores illo cumque repudiandae. Quam nam et aut.', 'books/3693e2b4a71e964d4d10baef63b878c8.png', 2, '2022-01-07 06:20:52', '2022-01-07 06:20:52', NULL),
(12, 'Autem molestiae.', 'Similique quam esse non numquam iusto. Est facere mollitia eum magnam. Facere suscipit sit recusandae ut nostrum perspiciatis.', 'books/1a4f0ed199253f134948b4b8563a132a.png', 7, '2022-01-07 06:20:53', '2022-01-07 06:20:53', NULL),
(13, 'Aut nam consequatur.', 'Rerum consequatur debitis cumque. Praesentium et iure et vel culpa. Excepturi vel officia molestias cupiditate quis. Voluptas expedita beatae officiis qui ipsum.', 'books/6e90928ff2eeb58848ceac4d3a7f3df9.png', 11, '2022-01-07 06:20:54', '2022-01-07 06:20:54', NULL),
(14, 'Qui.', 'Aut unde esse quam sed omnis. Nihil voluptatem qui aliquid aut. Velit tempore voluptate eos ea sit. Aut vero est et voluptatem. Eius id eius nulla est tempore consectetur. Ex qui id velit.', 'books/79076a433833503dbbaa6c253e776ee2.png', 16, '2022-01-07 06:20:54', '2022-01-07 06:20:54', NULL),
(15, 'Voluptas explicabo quasi optio.', 'Et laudantium voluptatem repellat occaecati sequi non voluptatem. Illum tenetur eos eum voluptate. Eligendi sunt quae in quas ex nihil.', 'books/7a66b5a76dd2fd7a4f1e50fd31c70aaa.png', 1, '2022-01-07 06:20:55', '2022-01-07 06:20:55', NULL),
(16, 'Necessitatibus sit quibusdam.', 'Voluptatum rem autem voluptatibus. Magnam doloremque in repellendus sed inventore accusamus aliquam. Officia aut laboriosam nihil maxime ullam ratione.', 'books/d7d5f06114974683d30c21f389eff031.png', 11, '2022-01-07 06:20:56', '2022-01-07 06:20:56', NULL),
(17, 'Dignissimos.', 'Amet animi dolores quidem non. Aut voluptatem enim est sed. Iure consequuntur repellat quis corporis. Et natus id eos autem.', 'books/bcf11fd97ec46c880614b68554078015.png', 6, '2022-01-07 06:20:57', '2022-01-07 06:20:57', NULL),
(18, 'Vitae accusamus.', 'Nisi est quos quisquam fugit enim. Tempore aut culpa facilis aliquam qui nihil. Quasi inventore sint laborum quod error aut ut similique.', 'books/ae47f49eb640ea3f4af71f65f22cd37e.png', 10, '2022-01-07 06:20:58', '2022-01-07 06:20:58', NULL),
(19, 'Distinctio omnis.', 'Sunt consectetur voluptas voluptatem sapiente ratione magnam. Adipisci aspernatur sit ut ullam eveniet. Enim omnis quam vel inventore sint sunt.', 'books/85cad5a6fbabf361c4254262670047b0.png', 8, '2022-01-07 06:20:58', '2022-01-07 06:20:58', NULL),
(20, 'Ut alias voluptatem.', 'Quia labore ipsam quibusdam. Dolores tenetur consequatur est et velit unde. Quia consequatur provident dolorem vitae porro et.', 'books/dedcdbe5b229d0de07d4813bd0acdcbb.png', 2, '2022-01-07 06:20:59', '2022-01-07 06:20:59', NULL),
(21, 'Explicabo temporibus.', 'Voluptatem est commodi quam consequatur suscipit voluptatem esse. Eaque commodi dolorem repudiandae optio. Cumque dolor voluptate eligendi ipsa sequi.', 'books/35b97ba92c34e83e631dbe7f59a10aac.png', 8, '2022-01-07 06:21:00', '2022-01-07 06:21:00', NULL),
(22, 'Quas beatae voluptates aut.', 'Ipsa et vel iure doloribus. Occaecati culpa non tempore quis tempora laboriosam omnis.', 'books/2f888ec91071d6f4666e55c9a7d9dfa3.png', 14, '2022-01-07 06:21:01', '2022-01-07 06:21:01', NULL),
(23, 'Et consequatur perferendis.', 'Consequatur et voluptas facere neque quo. Sit ipsam minima in tempora eum. Hic quasi sunt eligendi dolorem illum. Non ex corrupti est iure.', 'books/45d2744ab2450c60f520e435843abf06.png', 8, '2022-01-07 06:21:02', '2022-01-07 06:21:02', NULL),
(24, 'Quod nihil recusandae vel eligendi.', 'Atque ut dolore est ducimus rerum minima eius. Incidunt quam qui fugit et quis. Qui sit aut quibusdam.', 'books/79a8589452e062cc4594513e84b0d7de.png', 4, '2022-01-07 06:21:02', '2022-01-07 06:21:02', NULL),
(25, 'Similique alias fugiat.', 'Cumque aut cum reprehenderit nihil facere illo et cupiditate. Velit porro iste in iste aut soluta ea. Voluptatibus culpa corporis dignissimos. Eius placeat odit quos maiores facere rerum.', 'books/1146e1171d3028462a96eb9808a164d0.png', 16, '2022-01-07 06:21:03', '2022-01-07 06:21:03', NULL),
(26, 'Consequatur tempore quasi quos et.', 'Est est voluptatibus et ut ut culpa et suscipit. Et est laudantium necessitatibus qui minus ea. Quis nesciunt consectetur ea optio.', 'books/f14b39bbd36fb06acd98feb4de4f71e5.png', 13, '2022-01-07 06:21:04', '2022-01-07 06:21:04', NULL),
(27, 'Qui odit.', 'Nisi magni ut unde necessitatibus voluptas aut. Est vel beatae similique quia necessitatibus distinctio. Rerum voluptas quisquam autem a minima.', 'books/04b020ca7cbdbd7f1360505bb88db14b.png', 17, '2022-01-07 06:21:05', '2022-01-07 06:21:05', NULL),
(28, 'Provident odit eum molestiae enim.', 'Possimus sunt sint rerum qui quae saepe inventore qui. Eos et delectus incidunt. Vel natus iste sint aliquid ut odio. Est dolor et ut voluptates. Id suscipit at suscipit aut repellat et.', 'books/88042c0b222234bb3eaab41d49288a74.png', 14, '2022-01-07 06:21:06', '2022-01-07 06:21:06', NULL),
(29, 'Eum nesciunt totam error omnis.', 'Nisi ullam corporis doloremque officia ut adipisci. Sint qui ut et quod impedit. Atque non quisquam asperiores tempora qui.', 'books/757eb1334c32835250435f9087885de8.png', 1, '2022-01-07 06:21:07', '2022-01-07 06:21:07', NULL),
(30, 'Iste facilis eaque necessitatibus.', 'Facilis eum id unde distinctio. Perferendis exercitationem labore aliquam quia vero. Dignissimos provident quam nesciunt et fugiat.', 'books/2d33d054f77b5bda11e710a6a3253a6b.png', 7, '2022-01-07 06:21:07', '2022-01-07 06:21:07', NULL),
(31, 'Vitae dignissimos.', 'Esse repellat omnis saepe quam eaque. Rem quod et delectus voluptatem. Quia veritatis commodi minima vitae.', 'books/0166be7748580d966425d55a24b9cc98.png', 2, '2022-01-07 06:21:08', '2022-01-07 06:21:08', NULL),
(32, 'Aspernatur libero.', 'Illum cum non non enim reiciendis animi qui. Aperiam ea doloremque quam quos. Nostrum iure dolores fuga aliquid veritatis dicta est corrupti. Quo iusto aliquam dicta aliquam cumque accusamus nostrum.', 'books/048404b45423e36bec9260648146cbd2.png', 3, '2022-01-07 06:21:09', '2022-01-07 06:21:09', NULL),
(33, 'Nisi.', 'Ut reiciendis cum tempora molestiae nesciunt numquam et. Enim quo magnam mollitia perspiciatis velit est. Neque cupiditate ab ratione ducimus ducimus ipsam.', 'books/dcfc75dc355e0be99a9cdf441988f3bf.png', 9, '2022-01-07 06:21:10', '2022-01-07 06:21:10', NULL),
(34, 'Molestias eos soluta.', 'Sed autem doloribus commodi. Id quia dolorem porro nesciunt perspiciatis et libero. Laborum nihil est eos velit perspiciatis. Rerum adipisci distinctio labore nisi doloribus dolorem.', 'books/229920a10a1d07008568f1186588d6e3.png', 4, '2022-01-07 06:21:11', '2022-01-07 06:21:11', NULL),
(35, 'At.', 'Labore hic sunt eligendi dolor placeat quis. Est optio possimus debitis quis quos et cumque. Voluptas esse magnam delectus sed animi.', 'books/d939f7aee61dc2f01ba89cf7d6cf6abb.png', 17, '2022-01-07 06:21:11', '2022-01-07 06:21:11', NULL),
(36, 'Praesentium nihil et.', 'Pariatur eaque et distinctio at et ad magnam. Alias delectus vitae numquam eos possimus et. Alias quam nostrum et consequatur consequatur nemo.', 'books/078a1b74bcea15fc3ec4a8d0c0f37dc6.png', 8, '2022-01-07 06:21:12', '2022-01-07 06:21:12', NULL),
(37, 'Et ullam.', 'Dolor atque culpa dolores molestiae sunt et. Ullam magni impedit dolorem illum ducimus ducimus iusto. Magni molestias et est et.', 'books/733070ad19c2f0f0f4ccbd86e0664d70.png', 12, '2022-01-07 06:21:13', '2022-01-07 06:21:13', NULL),
(38, 'Nihil debitis reiciendis.', 'Quos velit dicta occaecati cum. At adipisci quis est omnis atque optio omnis.', 'books/35136b6746bb4b3d1b4639391edf0401.png', 15, '2022-01-07 06:21:14', '2022-01-07 06:21:14', NULL),
(39, 'Aut nostrum.', 'Nisi excepturi maxime sit reprehenderit molestiae minus natus. Expedita debitis est cupiditate similique omnis molestiae sapiente. Voluptas ut nam praesentium a temporibus.', 'books/45f020031153296dcb095e3c8cb47135.png', 3, '2022-01-07 06:21:15', '2022-01-07 06:21:15', NULL),
(40, 'Eaque consequatur.', 'Neque dolores fugiat repudiandae cumque perspiciatis. Delectus accusamus aliquid dolore ducimus quia. Adipisci ullam est mollitia nesciunt exercitationem pariatur quis.', 'books/b029c4e04d8fde1b73e5405aac7ffe96.png', 12, '2022-01-07 06:21:15', '2022-01-07 06:21:15', NULL),
(41, 'Sint in non repudiandae.', 'Enim voluptatibus voluptatem repellat fugiat quia et quidem facilis. Ad ab vel dicta vitae eius minus. Laboriosam non praesentium id qui.', 'books/92995e41e91797125c563f5fa762fe11.png', 5, '2022-01-07 06:21:16', '2022-01-07 06:21:16', NULL),
(42, 'Asperiores molestias sint et rerum.', 'Voluptatem repudiandae vel laborum et sed unde pariatur. Et sunt aspernatur qui. Voluptates reprehenderit assumenda sed nostrum aut at. Commodi sit deserunt odit autem ipsam inventore facilis.', 'books/6f6a31d55bb15a30dc15f29e5ff34471.png', 11, '2022-01-07 06:21:17', '2022-01-07 06:21:17', NULL),
(43, 'Iusto id molestias nihil.', 'Natus neque praesentium vero sit velit. Perferendis quod alias tempore dolorum. Eius libero sit recusandae excepturi vero culpa inventore inventore. Est repudiandae qui vel ut dolorum.', 'books/82c29912794dcd57cae9130dc4bcbd21.png', 2, '2022-01-07 06:21:18', '2022-01-07 06:21:18', NULL),
(44, 'Vel voluptatem sed porro.', 'Accusamus nihil fuga libero totam eveniet quia blanditiis. Rerum eum in illum id fuga est. Praesentium explicabo repellendus et cumque est non cum. Magnam magni qui nobis.', 'books/b5646128b0fb0ef6a9d5b0cad270cec7.png', 15, '2022-01-07 06:21:19', '2022-01-07 06:21:19', NULL),
(45, 'Sint laborum est.', 'Molestiae qui culpa ipsam. Qui provident aut quibusdam ut. Numquam consequatur rerum ut.', 'books/226b45575b581cfba52eacbf0edc0432.png', 1, '2022-01-07 06:21:19', '2022-01-07 06:21:19', NULL),
(46, 'Provident sapiente.', 'Rem nam maiores accusantium ad qui dolore. Consequatur temporibus blanditiis ut iste aut iusto. Consequatur atque pariatur sunt eos.', 'books/1c056f2e8ad958c09e64b4b430a1e2aa.png', 13, '2022-01-07 06:21:20', '2022-01-07 06:21:20', NULL),
(47, 'Non est.', 'Iusto rerum est ut unde recusandae tenetur et possimus. Voluptatem consequatur in et excepturi accusamus distinctio debitis ut. Non perferendis corrupti rerum. Officia et aut exercitationem quas.', 'books/e9e7652f19f78f07580f7e3329a03b0a.png', 3, '2022-01-07 06:21:21', '2022-01-07 06:21:21', NULL),
(48, 'Reprehenderit non.', 'Et ipsum ut exercitationem dolor consequuntur soluta quae. Culpa voluptatum officiis libero voluptatem distinctio placeat rerum. Qui consequatur iure et non aspernatur.', 'books/e7ff472b80aa1601c6631734b944b994.png', 17, '2022-01-07 06:21:22', '2022-01-07 06:21:22', NULL),
(49, 'Necessitatibus qui.', 'Distinctio occaecati repellendus dolore assumenda porro voluptatem. Facere sapiente qui est aut quam a. Hic dolores pariatur vel.', 'books/d1659a256a33bfed328ff2894a255ae7.png', 15, '2022-01-07 06:21:23', '2022-01-07 06:21:23', NULL),
(50, 'Id.', 'Minus et assumenda dolore qui sint quia. Provident aut et delectus iusto aut occaecati dolor.', 'books/4ad2f02ca51baa493d1e7f5ab800e746.png', 7, '2022-01-07 06:21:24', '2022-01-07 06:21:24', NULL),
(51, 'book1', 'book1 desc', 'books/wwwe_61d7dd5788555.jpg', 18, '2022-01-07 06:27:35', '2022-01-07 06:27:35', NULL),
(52, 'story', 'sadsad', 'books/ww_61d7e5cef40d1.jpg', 18, '2022-01-07 07:03:43', '2022-01-07 07:03:43', NULL),
(53, 'music', 'music book', 'books/kuru_aliya_61d7f6a07f89e.jpg', 18, '2022-01-07 08:15:28', '2022-01-07 08:15:28', NULL),
(54, 'art', 'art book', 'books/er_61d7f6daccf07.jpg', 2, '2022-01-07 08:16:26', '2022-01-07 08:16:26', NULL),
(55, 'maths', 'aaaaa', 'books/eee_61d7fa8f2074c.jpg', 19, '2022-01-07 08:32:15', '2022-01-07 08:32:15', NULL),
(56, 'Spin a Yarn', 'description', 'books/88bc6f40fb3c4377bd6af7687d4a051a_61d819c6e14d5.jpg', 20, '2022-01-07 10:45:26', '2022-01-07 10:45:26', NULL),
(57, 'Test My book', 'Description Book', 'books/43523fa0775647fe96b945365bd5aee7_61d819eb79124.jpg', 20, '2022-01-07 10:46:03', '2022-01-07 10:46:03', NULL),
(58, 'Maths Book', 'Maths Book Description', 'books/books_759_61d81f43b7264.jpg', 20, '2022-01-07 11:08:51', '2022-01-07 11:08:51', NULL),
(59, 'Coach Carter', 'Coach Carter', 'books/50BeautifulFrozenColoringPagesForYourLit_61d822d5b3b6c.jpg', 2, '2022-01-07 11:24:05', '2022-01-07 11:24:05', NULL),
(60, 'Coach Carter 111111', 'Coach Carter', 'books/50BeautifulFrozenColoringPagesForYourLit_61d822f8200a4.jpg', 2, '2022-01-07 11:24:40', '2022-01-07 11:24:40', NULL),
(61, 'google', 'description one', 'books/247647_61deb83053a4c.jpg', 21, '2022-01-12 11:14:56', '2022-01-12 11:14:56', NULL),
(62, 'Spin a Yarnrer', 'dssedwe', 'books/88bc6f40fb3c4377bd6af7687d4a051a_61debabf0c864.jpg', 20, '2022-01-12 11:25:51', '2022-01-12 11:25:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 1),
(12, '2014_10_12_100000_create_password_resets_table', 1),
(13, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(15, '2021_12_22_184818_create_books_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('admin','teacher') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'teacher',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `phone`, `role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@email.com', '$2y$10$pLhouAKMN8ELCzFe3wpSIuOCUvFVUdVODGpBKgbbL4/hvAEE.TTlK', '', 'admin', 1, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(2, 'test', 'test@email.com', '$2y$10$X6dyiheTm2BpAOeDVTyBrug1wFIOlapEhVcLEE6UCFBgayB0cNmCy', '', 'teacher', 1, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(3, 'Abe Carroll', 'mercedes81@example.net', '$2y$10$qQJoKmvTj1gr5rDCU27c6uj8Z/gSgCV7ZV.Tj9/0aZWr7svvXyPhO', '(817) 738-0577', 'teacher', 0, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(4, 'Katelyn Kris', 'tromp.cyril@example.org', '$2y$10$LQKPHLQc9j7FnkGifG6Doe6SOeidDr7nRgeO.h7WIFDEwYXcf254K', '+1-341-692-1458', 'teacher', 0, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(5, 'Gardner Willms MD', 'veum.lilliana@example.net', '$2y$10$5SXi8wh2veIqNJ6Gm5U6OOjXs7/tFiStVjB2azdeiopYRyHn6FYXG', '+1-716-476-6720', 'teacher', 1, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(6, 'Angelo Batz', 'treutel.kennith@example.net', '$2y$10$hssNYMHzOEZFGcQvOV.KtuDhgOgw/9YH2BO4.V5hm0rQiKfHjoUai', '1-763-914-3418', 'teacher', 0, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(7, 'Ursula Pfannerstill', 'cole.earnestine@example.org', '$2y$10$ke3b5IBPlRmd9KJqVcIIheAhfobywxBDc8QFr111eAbe/aA9ndFFa', '(678) 244-9559', 'teacher', 1, '2022-01-07 06:20:42', '2022-01-08 23:39:11'),
(8, 'Mr. Zackary Gusikowski DVM', 'annalise.nikolaus@example.net', '$2y$10$OA/.iBHTaj0wvd67mpCpi.r3hJ7MvCYiWNYedYdii4NpRt2MIbMvu', '(937) 686-1645', 'teacher', 1, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(9, 'Monty Bartell', 'weimann.herminia@example.org', '$2y$10$sx6szfFx1n.vJaSfuCG0x.G56.qyDBYhO.bxmoAk9bz6UzSMMwedi', '(406) 263-6772', 'teacher', 1, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(10, 'Declan Bode', 'freddie.jacobs@example.net', '$2y$10$cX4tNbEOxNQyqQHH8FdV8eNWA11HdG2uoMqnnDxxYwUeo/3q7Z7Iy', '+1.305.620.4453', 'teacher', 0, '2022-01-07 06:20:42', '2022-01-07 06:20:42'),
(11, 'Antonette Lubowitz', 'udonnelly@example.com', '$2y$10$EZfSn2qlMNAv/CQQZdW7FOwhAJjCB..r3iuMVa/ywOe7SthQOgAke', '959-317-6498', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(12, 'Gudrun Stehr DDS', 'harold08@example.net', '$2y$10$9uDzZYkpRNxp1.w4Xm8E.erleUn6aydhEOJT1JB3l59F2R0D9K2n.', '815.317.3327', 'teacher', 1, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(13, 'Dr. Jeromy Weber II', 'kondricka@example.com', '$2y$10$FfIe0w6tfEA/5R/wsnJM9OQV9U20sq1Payb.fXe.VLJR7xiyGDKCW', '(612) 457-0578', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(14, 'Prof. Merlin Rempel Jr.', 'dorothy.barrows@example.com', '$2y$10$XO5SNTkvHHYB0Fw.Nc2mf.KpF/XyFSs0flQW4ct44JkWBu7r3DjL.', '+1-231-807-7414', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(15, 'Prof. Merritt Hickle DVM', 'goodwin.eileen@example.net', '$2y$10$DRk0afMweGkVyYvFQfnpuO4iaL5dMtTtLYtxOcPgja/24LvmUdxjO', '585-712-4472', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(16, 'Ms. Kristina Douglas PhD', 'twitting@example.org', '$2y$10$rTDoGJ3W4C6VEBcR0.IXKekyp7BEgKSSUPKyHvWsWsCQ53btUP5FW', '1-662-357-5937', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(17, 'Dorothy Kovacek PhD', 'dangelo38@example.org', '$2y$10$u5eTob/x.D1p7SnxSNOaWunFz5jiEFQRgj6MSQNuApiP4DNMY9hM.', '+1.585.825.4858', 'teacher', 0, '2022-01-07 06:20:43', '2022-01-07 06:20:43'),
(18, 'Duncan Norton', 'user@gmail.com', '$2y$10$hs2kYEsGDNXwQn66BgG2uecun8oF85aiDHYFB/jLPzyolp2hcdYfa', '+1 (643) 706', 'teacher', 1, '2022-01-07 06:23:36', '2022-01-07 08:22:29'),
(19, 'susantha', 'susanthawarnapura@gmail.com', '$2y$10$IBJnRBO5b.gR2.EX3H9jOu1/CLmfPxOC76K9jqCmmQtSroQzQMPRm', '0712579230', 'teacher', 1, '2022-01-07 08:31:16', '2022-01-07 08:31:16'),
(20, 'Fayas', 'fayas@gears-int.com', '$2y$10$YgwivErQG9.2CpMd.iyS9uxmXA/tuaBENvkdUlxKYAQ8WHI5dXryO', '0777110250', 'teacher', 1, '2022-01-07 10:44:06', '2022-01-07 10:49:46'),
(21, 'saman rathnayake', 'abc@gmail.com', '$2y$10$sg9wZAqw7nWevClAHt7D5u3LcRYkRR6MdEhctW2FBypizaBY8kXyy', '0812345678', 'teacher', 0, '2022-01-12 11:10:47', '2022-01-12 11:31:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_author_id_foreign` (`author_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
