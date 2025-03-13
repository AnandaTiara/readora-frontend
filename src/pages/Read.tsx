import Footer from "../fragments/Footer";
import Button from "../components/elements/Button";
import Navbar2 from "../components/elements/Navbar2";
import Highlight from 'react-highlight'

const Read = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-neutral-500">
        <div className="flex-1 flex flex-col">
          <Navbar2 className="md:rounded-md " />

          <main className="p-10 overflow-auto max-w-4xl mx-auto text-base-black mt-70 font-TimesNewRoman mb-30 ">
            <h1 className="text-4xl text-center mb-10 font-TimesNewRoman font-bold ">
              Chapter 1
            </h1>
            <p className="text-lg leading-relaxed">
              <Highlight className="bg-red-400">Lorem ipsum dolor sit amet</Highlight> consectetur adipisicing elit.
              Temporibus eveniet voluptas laboriosam neque, voluptate facilis
              eum labore omnis. Illo similique, ullam ut a beatae, debitis
              expedita voluptates quae, deleniti ea blanditiis quam? Inventore
              fugit nesciunt tenetur quae debitis, pariatur quam atque
              laboriosam magnam, dolore dolor quia nisi neque unde aliquid est
              blanditiis in, beatae magni adipisci voluptates non ullam. Nulla,
              sint labore eos dicta, soluta porro molestiae non molestias iure
              aperiam officia magni distinctio aliquid! Quo, voluptatum aperiam
              quisquam maxime nostrum id qui cum tenetur voluptate sequi placeat
              libero dolor autem architecto inventore fuga numquam. Quasi minima
              quae laudantium neque sed earum aperiam inventore facilis, eum
              placeat unde animi corporis praesentium at natus perspiciatis iste
              autem, deserunt sapiente? Nemo dolorum fuga enim quam placeat
              odio. Natus, sed architecto! Dolorum, dolor ullam officia
              praesentium quod non quo, quibusdam laboriosam tempore libero
              impedit odio pariatur beatae reprehenderit, accusantium
              voluptatibus repellendus iusto! Libero nam alias voluptas esse
              molestiae doloribus aliquid iusto corrupti inventore deleniti
              voluptatem, repudiandae recusandae, nulla ab unde iste eaque
              assumenda delectus est quidem, eligendi dolores. Corrupti deserunt
              rem, aliquid, aperiam molestias quaerat vitae necessitatibus
              laboriosam sapiente illo totam, accusantium blanditiis iusto eum
              eius et exercitationem reprehenderit inventore dolorem quod. Aut
              eveniet deleniti quisquam iusto eos a veritatis. Ipsam sunt ipsa
              nesciunt tempora maxime molestias porro vel ratione omnis
              reprehenderit praesentium sequi, voluptatibus dolorem
              exercitationem! Voluptates, doloribus labore quia possimus libero,
              est neque velit culpa, molestiae cumque officia distinctio dolor
              odit delectus? Quibusdam obcaecati dignissimos porro rerum libero
              consequatur quaerat adipisci atque et voluptate ut eaque sunt
              minima animi enim mollitia fuga, eveniet nam, numquam, rem quasi
              accusamus corrupti cum dolorem! Atque neque, amet rerum dolores
              cum illo odio ducimus. Magnam alias assumenda consequatur cum
              aspernatur hic consequuntur voluptatum earum tenetur blanditiis
              nemo tempore aperiam neque molestiae, modi eos officiis magni
              atque numquam porro odit laborum enim sit. Voluptatem quos
              deleniti ducimus inventore, qui voluptates cumque eligendi eius,
              commodi soluta ea optio cupiditate sequi consequuntur praesentium
              amet perferendis rem illo quas odit. Inventore neque atque esse
              doloribus ipsa quaerat possimus quos saepe eaque nostrum. Delectus
              quod iste natus nulla reiciendis officia rerum aspernatur sapiente
              corporis inventore aliquam facere, hic sequi dignissimos
              recusandae voluptates quisquam, neque alias. Dolores, eos
              exercitationem. Quasi animi facilis, velit nostrum repellendus
              eligendi iure, voluptas harum consectetur ratione laudantium
              tempora rerum sit, maiores sunt soluta magnam praesentium adipisci
              blanditiis perferendis doloribus amet dolor vitae hic. Deleniti,
              illum magnam totam nulla nesciunt fugit quibusdam officia unde
              veritatis corporis? A, magnam. Similique, quas cum asperiores
              ullam numquam placeat delectus perferendis recusandae nemo minus!
              Vitae dolor quis consequuntur cupiditate ea enim quos ipsa
              nesciunt provident similique eaque, ratione aut voluptas possimus
              totam officia autem fugiat vero facere dolorum excepturi!
              Accusamus quasi amet laborum unde modi maiores, quisquam
              doloremque quod magni ratione iste dolore quae corrupti pariatur
              eligendi blanditiis doloribus nostrum accusantium sunt cupiditate
              eos? Quia facilis necessitatibus nam laboriosam. Quo ducimus, quae
              incidunt, praesentium omnis odio dolore delectus voluptate neque
              recusandae mollitia aspernatur eius quia labore nemo! Quos optio
              nostrum iure?
            </p>

            <Button className="flex justify-end cursor-pointer">Next</Button>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Read;
