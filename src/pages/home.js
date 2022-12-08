import '../css/home.css';
import Menu from './menu.js';

export default function Home() {
  return (
      <div className="center">
          <Menu/>
            <div>
                <label className="fonte">Bem vindo ao Hack@Cloud!</label>
            </div>
                <p><a href="https://www.oracle.com/br/cloud-native/">Oracle Cloud Native</a></p>
                <p><a href="https://discord.com/">Discord</a></p>
                <p><a href="https://www.oracle.com/br/cloud/free/"> Oracle Free Tier</a></p>
                <p><a href="https://videohub.oracle.com/playlist/dedicated/161711051/1_utlkexy9/1_dr1mckft"> Oracle CSM Live</a></p>
                <p><a href="https://videohub.oracle.com/playlist/dedicated/161711051/1_kyroudpb/1_i73irubs"> Oracle CSM Live Short-Video</a></p>
      </div>
  );
}
